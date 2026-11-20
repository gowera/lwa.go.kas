# AGENTS.md — LWA.GO.KAS institutional portal

## Architecture rules

- All user-facing strings go through the i18n dictionary in `src/i18n/`; components never hardcode French copy inline. A new page adds its keys to every locale file, with `fr` complete and other locales falling back to `fr` until reviewed. Why: the site must ship FR/SW/EN and unreviewed machine translation must never reach legal, financial or medical copy.
- All company data (identity, contacts, sectors, locations, services, socials) lives in `src/data/`. Components read from it; nothing is hardcoded in JSX. Why: the company must be able to correct or complete a single file instead of hunting through pages.
- Every service and every location carries a `status` field of `actif | en developpement | non disponible`, rendered by `StatusBadge`. Defaults are conservative (`en developpement`) until the company confirms otherwise. Why: the brief forbids presenting unconfirmed activities as operational.
- Badges for `en developpement` render nothing (user request); missing company data remains null; `PendingField` currently renders nothing, including its label and hint, and unconfigured social links are omitted. Why: the user requested temporarily hiding incomplete information without inventing replacements.
- WordPress integration goes through `src/lib/wordpress.ts` only: one adapter that reads `VITE_WORDPRESS_URL`, returns empty data when unset, and never fabricates articles. Why: `lwagokas.org` is not live yet and the brief forbids simulated backend data.
- Forms in this version submit through direct contact channels (tel, WhatsApp, mailto) built from `src/data/company.ts`. No submissions are stored. Why: the user chose direct contact only for this version.
- Colors, shadows and radii come from the semantic tokens in `src/index.css`; components use token-based utilities only. Why: centralized palette roles let a brand refresh reach every page without hardcoded colors.
- Each route sets its own SEO title and description via the `useSeo` hook. Why: per-page SEO is a brief requirement and the static `index.html` cannot cover every page.

- Displayed company photos and logo are served from `public/assets/` with base-aware paths centralized in `src/data/media.ts`; images do not establish operational status, authorizations, addresses or personal roles. Why: production asset loaders expect images under `assets/`.
- City records include status-bearing sites and separate withdrawal schedules; confirmed opening hours do not activate sector services. Why: city presence and service authorization are independent facts.
- Shared institutional interior pages are exported from `src/pages/PortalPages.tsx`, while the home and services index have their own modules. Why: common page shells and direct-contact flows stay consistent.
- Sector and location display copy is mapped into the shared i18n dictionary from company data; unreviewed locale entries use French. Why: data remains authoritative and sensitive copy is never automatically translated.
