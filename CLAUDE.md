# Courtside AI — Landing Page (court-side.ai)

Marketing site for Courtside AI. Every merge to `main` deploys to production at https://court-side.ai via Vercel.

## Stack
- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui (Radix primitives)
- React Router (pages in `src/pages`)
- Supabase client (waitlist form) — `src/integrations/supabase`

## Commands
- `npm install` — install deps
- `npm run dev` — local dev server (http://localhost:8080)
- `npm run build` — production build; MUST pass before opening a PR
- `npm run lint` — ESLint

## Where things live
- Home page sections: `src/components/` — `Header`, `Hero`, `LogoCarousel`, `MayaIntro`, `Features`, `HowItWorks`, `Comparison`, `FAQ`, `CTA`, `Waitlist`, `Footer`
- Home page assembly/order: `src/pages/Index.tsx`
- Other pages: `src/pages/About.tsx`, `Privacy.tsx`, `Terms.tsx`
- Images/logos: `src/assets/` and `public/`
- SEO / social share tags (title, description, OG image): `index.html`
- Colors, fonts, theme tokens: `tailwind.config.ts` and `src/index.css`

## Workflow rules (always follow)
1. Always `git pull` on `main` before starting, so you don't overwrite a teammate's change.
2. Keep each change small and focused — one topic per commit, with a plain-English commit message.
3. Run `npm run build` and confirm it succeeds before pushing. A broken build will not deploy.
4. Commit and push directly to `main`. Pushing to `main` publishes live to court-side.ai within ~1 minute.
5. After pushing, open https://court-side.ai and check the change (hard refresh).
6. If a change breaks the site, revert it right away with `git revert <commit>` and push.

## Do not touch without asking Dragan
- `src/components/ui/` — generated shadcn components
- `supabase/` (migrations, config) and `.env`
- `vite.config.ts`, `package.json` dependencies, lockfiles (`package-lock.json`, `bun.lock*`)
- Routing in `src/App.tsx` (adding a new page is fine; changing existing routes is not)

## Style
- Match existing component patterns and Tailwind classes; reuse existing colors/tokens instead of hard-coded hex values.
- Keep copy concise and confident. Product voice agent is named "Maya".
- Test layout at mobile width as well as desktop.
