import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { ScrollToTop } from "./ScrollToTop";

/** Shared shell: skip link, header, page content, footer and floating WhatsApp. */
export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="contenu" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default Layout;
