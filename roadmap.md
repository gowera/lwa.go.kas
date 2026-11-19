# Roadmap — LWA.GO.KAS institutional portal

Source brief: `user-uploads://1._RÔLE_ET_OBJECTIF_Agis_comme_une_équipe_pasted.txt`

## Decisions taken
- Replace the Oredy TECHNOLOGIES plumbing project completely.
- Official logo received and integrated.
- Multilingual FR / Kiswahili / EN architecture in place now; French copy complete, SW/EN to complete.
- Forms: direct contact only (tel, WhatsApp, email). Nothing stored.

## Tasks
- [x] Mobile: show the phone number in the top bar and hide the floating WhatsApp button at the page bottom until scrolling up
- [x] Cahier des recommandations: active services (health Goma/Butembo, security Butembo, development), care vouchers listed, sector photos
- [x] Butembo photo moved to the locations page banner
- [x] Documents page and home section ready for PDFs published in the WordPress media library; empty until WordPress is configured
- [x] Complete confirmed location addresses, guichets and hours; test supplied values
- [x] Move displayed images to public and verify real image loading across pages
- [x] Replace home opening photograph with the newly supplied group image
- [x] Restyle all pages in bright yellow, black and white, inspired by cabinet-amk.vercel.app
- [x] Remove generic decorative elements
- [ ] Hide Lovable badge: platform requires an editor role on a Pro plan or higher
- [x] Verify refreshed desktop/mobile navigation and image framing using originals retrieved from asset storage; local Vite does not serve CDN paths
- [x] Integrate supplied photographs into the home, company and sector pages
- [x] Clean out plumbing pages, components and images
- [x] Official logo received: transparent version, header/footer placement, favicon
- [x] Design system: navy nuit / or / blanc tokens, typography, shadows
- [x] i18n layer FR / SW / EN with visible selector
- [x] Data layer: company, sectors, locations, services, socials, jobs, trainings, news adapter
- [x] WordPress adapter for lwagokas.org (inert until configured)
- [x] Layout: header (logo slot, nav, language selector, contact button, mobile menu), footer
- [x] Shared UI: section heading, cards, status badge, pending field, reveal, floating WhatsApp
- [x] Accueil (hero, qui sommes-nous, 4 secteurs, vision/valeurs, implantations, partenariats, actualités, CTA)
- [x] À propos
- [x] Nos services + 4 pages secteur détaillées
- [x] Nos implantations
- [x] Partenariats
- [x] Carrières et formations
- [x] Actualités
- [x] Contact
- [x] Mentions légales + Politique de confidentialité + 404
- [x] Supplied company photographs optimized and integrated
- [x] SEO: per-page meta, robots.txt, Open Graph, alt text
- [ ] Production sitemap: requires the final published domain
- [ ] WordPress news activation: requires lwagokas.org to be live and configured
- [ ] Reviewed SW/EN sector, medical and legal translations: requires company-approved copy
- [x] Verify: build clean, all routes render, mobile layout, language switch
