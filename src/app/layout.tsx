import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";
import LoaderGate from "../components/LoaderGate";
import ScrollToTop from "../components/ScrollToTop";
import ColorUnderCursorLogger from "../components/ColorUnderCursorLogger";
import CustomCursor from "../components/CustomCursor";
import NavBar from "../components/NavBar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nate Bahne",
  description: "Portfolio of Nate Bahne - Board game designer and maker of things",
};

export const viewport: Viewport = {
  themeColor: [
    // Note: CSS variables don't work in meta tags, so we use the hex value
    // This value should match --tan in globals.css
    { media: "(prefers-color-scheme: light)", color: "#F5F1E6" },
    { media: "(prefers-color-scheme: dark)", color: "#F5F1E6" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {/* Critical: Scroll to top IMMEDIATELY before React renders to prevent components from reading wrong scroll position */}
        <Script
          id="scroll-to-top-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Disable scroll restoration
                if ('scrollRestoration' in history) {
                  history.scrollRestoration = 'manual';
                }
                // Scroll to top immediately - this runs before React hydration
                if (typeof window !== 'undefined') {
                  window.scrollTo(0, 0);
                  if (document.documentElement) {
                    document.documentElement.scrollTop = 0;
                    document.documentElement.style.background = 'var(--tan)';
                  }
                  if (document.body) document.body.scrollTop = 0;
                }
              })();
            `,
          }}
        />
        <Script
          id="theme-css-vars-rgb"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function setRgbVars(hexVar, rVar, gVar, bVar) {
                  var hex = getComputedStyle(document.documentElement).getPropertyValue(hexVar).trim();
                  if (!hex) return;
                  if (hex[0] === '#') hex = hex.slice(1);
                  if (hex.length === 3) {
                    hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
                  }
                  var r = parseInt(hex.slice(0,2),16);
                  var g = parseInt(hex.slice(2,4),16);
                  var b = parseInt(hex.slice(4,6),16);
                  document.documentElement.style.setProperty(rVar, r);
                  document.documentElement.style.setProperty(gVar, g);
                  document.documentElement.style.setProperty(bVar, b);
                }
                setRgbVars('--primary-main', '--primary-main-r', '--primary-main-g', '--primary-main-b');
                setRgbVars('--primary-bg', '--primary-bg-r', '--primary-bg-g', '--primary-bg-b');
              })();
            `
          }}
        />
        <ScrollToTop />
        <LoaderGate />
        <ColorUnderCursorLogger />
        <CustomCursor />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
