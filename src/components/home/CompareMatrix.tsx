import { Check, X } from "lucide-react";
import { COMPARE_AS_OF, COMPETITORS, MATRIX, OFFER, type Cell } from "@/data/competitors";
import { card } from "./theme";

const CellView = ({ c, ours }: { c: Cell; ours: boolean }) => {
  if (c.kind === "yes")
    return (
      <span className="flex flex-col items-center gap-1 text-center">
        <Check className={`h-5 w-5 ${ours ? "text-lime-400" : "text-[var(--muted)]"}`} />
        {c.note && <span className={`text-xs ${ours ? "font-medium text-lime-400" : "text-[var(--muted)]"}`}>{c.note}</span>}
      </span>
    );
  if (c.kind === "no") return <X className="mx-auto h-5 w-5 text-[var(--muted)] opacity-60" />;
  return <span className={`block text-center text-xs leading-snug ${ours ? "font-medium text-[var(--fg)]" : "text-[var(--muted)]"}`}>{c.note}</span>;
};

export const CompareMatrix = () => (
  <div className={`${card} mx-auto max-w-5xl overflow-x-auto`}>
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
);

export const OfferStrip = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--muted)] ${className}`}>
    {OFFER.map((o) => (
      <span key={o} className="flex items-center gap-1.5">
        <Check className="h-4 w-4 text-lime-400" />
        {o}
      </span>
    ))}
  </div>
);
