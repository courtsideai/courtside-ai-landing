import { useState } from "react";
import { Check, X } from "lucide-react";
import { COMPARE_AS_OF, COMPETITORS, MATRIX, OFFER, type Cell } from "@/data/competitors";
import { card } from "./theme";

const CellView = ({ c, ours }: { c: Cell; ours: boolean }) => {
  if (c.kind === "yes")
    return (
      <span className="flex flex-col items-center gap-1 text-center">
        <Check className={`h-5 w-5 ${ours ? "text-[var(--b)]" : "text-[var(--muted)]"}`} />
        {c.note && <span className={`text-xs ${ours ? "font-medium text-[var(--b)]" : "text-[var(--muted)]"}`}>{c.note}</span>}
      </span>
    );
  if (c.kind === "no") return <X className="mx-auto h-5 w-5 text-[var(--muted)] opacity-60" />;
  return <span className={`block text-center text-xs leading-snug ${ours ? "font-medium text-[var(--fg)]" : "text-[var(--muted)]"}`}>{c.note}</span>;
};

// Phones: pick one competitor and compare side by side instead of scrolling a wide table.
const CompareMobile = () => {
  const [col, setCol] = useState(1);
  return (
    <div className="sm:hidden">
      <div className="mb-3 flex gap-1 rounded-xl border border-[var(--line)] bg-[var(--card)] p-1" role="tablist" aria-label="Compare Courtside with">
        {COMPETITORS.slice(1).map((c, i) => (
          <button
            key={c}
            role="tab"
            aria-selected={col === i + 1}
            onClick={() => setCol(i + 1)}
            className={`flex-1 rounded-lg px-1 py-2 text-[13px] font-semibold transition ${col === i + 1 ? "bg-[var(--a)] text-[var(--on-primary)]" : "text-[var(--muted)]"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className={`${card} overflow-hidden`}>
        <div className="grid grid-cols-2 border-b border-[var(--line)] text-sm font-semibold">
          <span className="bg-[color-mix(in_srgb,var(--a)_14%,transparent)] px-4 py-3 text-center">Courtside</span>
          <span className="px-4 py-3 text-center text-[var(--muted)]">{COMPETITORS[col]}</span>
        </div>
        {MATRIX.map((row) => (
          <div key={row.label} className="border-b border-[var(--line)] last:border-0">
            <p className="px-4 pt-3 text-center text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">{row.label}</p>
            <div className="grid grid-cols-2 items-center text-sm">
              <div className="px-3 py-3"><CellView c={row.cells[0]} ours /></div>
              <div className="px-3 py-3"><CellView c={row.cells[col]} ours={false} /></div>
            </div>
          </div>
        ))}
        <p className="border-t border-[var(--line)] px-4 py-3 text-xs text-[var(--muted)]">Based on each company's public website, {COMPARE_AS_OF}. Prices in USD.</p>
      </div>
    </div>
  );
};

export const CompareMatrix = () => (
  <>
  <CompareMobile />
  <div className={`${card} mx-auto hidden max-w-5xl overflow-x-auto sm:block`}>
    <table className="w-full min-w-[720px] border-collapse text-sm">
      <thead>
        <tr className="border-b border-[var(--line)]">
          <th className="w-[26%] px-5 py-4" />
          {COMPETITORS.map((c, i) => (
            <th key={c} className={`px-3 py-4 text-center font-semibold ${i === 0 ? "bg-[color-mix(in_srgb,var(--a)_14%,transparent)] text-[var(--fg)]" : "text-[var(--muted)]"}`}>
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {MATRIX.map((row) => (
          <tr key={row.label} className="border-b border-[var(--line)] last:border-0">
            <td className="px-5 py-4 font-medium">{row.label}</td>
            {row.cells.map((c, i) => (
              <td key={i} className={`px-3 py-4 align-middle ${i === 0 ? "bg-[color-mix(in_srgb,var(--a)_14%,transparent)]" : ""}`}>
                <CellView c={c} ours={i === 0} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <p className="border-t border-[var(--line)] px-5 py-3 text-xs text-[var(--muted)]">
      Based on each company's public website, {COMPARE_AS_OF}. Prices in USD. Check their sites for current details.
    </p>
  </div>
  </>
);

export const OfferStrip = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--muted)] ${className}`}>
    {OFFER.map((o) => (
      <span key={o} className="flex items-center gap-1.5">
        <Check className="h-4 w-4 text-[var(--b)]" />
        {o}
      </span>
    ))}
  </div>
);
