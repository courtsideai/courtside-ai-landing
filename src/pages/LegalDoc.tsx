import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { LegalPage } from "@/components/LegalPage";
import { parseFrontMatter, renderMarkdown } from "@/lib/markdown";
import NotFound from "@/pages/NotFound";

// Single source of truth for the public legal documents: src/content/legal/*.md
const DOCS = import.meta.glob("/src/content/legal/*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

export const LEGAL_SLUGS = ["privacy", "terms", "operator-terms", "dpa"] as const;

const LegalDoc = ({ slug: fixed }: { slug?: string }) => {
  const params = useParams();
  const slug = fixed ?? params.doc ?? "";
  const src = (LEGAL_SLUGS as readonly string[]).includes(slug) ? DOCS[`/src/content/legal/${slug}.md`] : undefined;
  const doc = src ? parseFrontMatter(src) : null;

  useEffect(() => {
    if (doc?.meta.title) document.title = `${doc.meta.title} | Courtside AI`;
  }, [doc]);

  if (!doc) return <NotFound />;
  return (
    <LegalPage title="" wide>
      <article>{renderMarkdown(doc.body)}</article>
    </LegalPage>
  );
};

export default LegalDoc;
