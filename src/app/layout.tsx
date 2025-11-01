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
  weight: ["300"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nate Bahne",
  description: "Portfolio of Nate Bahne - Board game designer and maker of things",
};

export const viewport: Viewport = {
  themeColor: [
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
                    document.documentElement.style.background = '#F5F1E6';
                  }
                  if (document.body) document.body.scrollTop = 0;
                }
              })();
            `,
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
