import { ReactNode } from "react";

// Minimal Markdown → React renderer for our own legal documents (headings, paragraphs,
// lists, tables, blockquotes, bold/italic/code/links). Output is React elements only,
// never raw HTML.

export function parseFrontMatter(src: string): { meta: Record<string, string>; body: string } {
  const m = src.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { meta: {}, body: src };
  const meta: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { meta, body: src.slice(m[0].length) };
}

const link = "text-primary underline underline-offset-2 hover:opacity-80";

function inline(text: string, key = ""): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(re)) {
    if (m.index! > last) out.push(text.slice(last, m.index));
    const t = m[0];
    const k = `${key}-${i++}`;
    if (t.startsWith("**")) out.push(<strong key={k}>{inline(t.slice(2, -2), k)}</strong>);
    else if (t.startsWith("`")) out.push(<code key={k} className="rounded bg-white/10 px-1 py-0.5 text-[0.9em]">{t.slice(1, -1)}</code>);
    else if (t.startsWith("[")) {
      const lm = t.match(/^\[([^\]]+)\]\(([^)]+)\)$/)!;
      const external = /^https?:\/\//.test(lm[2]);
      out.push(
        <a key={k} className={link} href={lm[2]} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {inline(lm[1], k)}
        </a>,
      );
    } else out.push(<em key={k}>{inline(t.slice(1, -1), k)}</em>);
    last = m.index! + t.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const cells = (line: string) =>
  line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((c) => c.trim());

export function renderMarkdown(body: string): ReactNode[] {
  const lines = body.replace(/\r/g, "").split("\n");
  const out: ReactNode[] = [];
  let i = 0;
  let n = 0;
  const key = () => `b${n++}`;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }

    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      const level = h[1].length;
      const cls = ["", "text-4xl font-bold mb-2", "text-2xl font-semibold mt-12 mb-3", "text-xl font-semibold mt-8 mb-2", "text-lg font-semibold mt-6 mb-2"][level];
      const Tag = `h${level}` as "h1";
      out.push(<Tag key={key()} className={cls}>{inline(h[2])}</Tag>);
      i++; continue;
    }

    if (/^---+$/.test(line.trim())) { out.push(<hr key={key()} className="my-8 border-[var(--line)]" />); i++; continue; }

    if (line.startsWith(">")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].startsWith(">")) buf.push(lines[i++].replace(/^>\s?/, ""));
      out.push(
        <blockquote key={key()} className="my-4 border-l-4 border-[var(--a)] pl-4 text-[var(--muted)]">
          {buf.map((l, j) => <p key={j} className="my-1">{inline(l, `q${j}`)}</p>)}
        </blockquote>,
      );
      continue;
    }

    if (line.trim().startsWith("|") && /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i + 1] ?? "")) {
      const head = cells(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) rows.push(cells(lines[i++]));
      out.push(
        <div key={key()} className="my-5 overflow-x-auto rounded-lg border border-[var(--line)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5">
              <tr>{head.map((c, j) => <th key={j} className="px-3 py-2 font-semibold">{inline(c, `th${j}`)}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((r, j) => (
                <tr key={j} className="border-t border-[var(--line)] align-top">
                  {r.map((c, k) => <td key={k} className="px-3 py-2 text-[var(--muted)]">{inline(c, `td${j}-${k}`)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    const ul = /^\s*[-*+]\s+/;
    const ol = /^\s*\d+\.\s+/;
    if (ul.test(line) || ol.test(line)) {
      const ordered = ol.test(line);
      const re = ordered ? ol : ul;
      const items: string[] = [];
      while (i < lines.length && re.test(lines[i])) {
        let t = lines[i++].replace(re, "");
        while (i < lines.length && lines[i].trim() && /^\s{2,}\S/.test(lines[i]) && !ul.test(lines[i]) && !ol.test(lines[i])) t += " " + lines[i++].trim();
        items.push(t);
      }
      const Tag = ordered ? "ol" : "ul";
      out.push(
        <Tag key={key()} className={`my-3 ml-6 space-y-1.5 ${ordered ? "list-decimal" : "list-disc"}`}>
          {items.map((t, j) => <li key={j}>{inline(t, `li${j}`)}</li>)}
        </Tag>,
      );
      continue;
    }

    const buf: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|>|\||---+$)/.test(lines[i]) && !ul.test(lines[i]) && !ol.test(lines[i])) buf.push(lines[i++].trim());
    out.push(<p key={key()} className="my-3 leading-relaxed text-[var(--fg)]/90">{inline(buf.join(" "))}</p>);
  }
  return out;
}
