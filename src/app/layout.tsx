import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import AppLoader from "../components/AppLoader";
import ScrollToTop from "../components/ScrollToTop";
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
        <ScrollToTop />
        <AppLoader />
        {children}
      </body>
    </html>
  );
}
