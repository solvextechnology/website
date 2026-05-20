import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Solvex Technology - Innovating Digital Success",
    template: "%s | Solvex Technology",
  },
  description: "A professional digital solutions company providing complete online growth services for businesses and startups. Web development, mobile apps, branding, and more.",
  keywords: ["web development", "mobile app", "digital marketing", "branding", "business solutions", "Solvex Technology"],
  authors: [{ name: "Solvex Technology", url: "https://solvextechnology.in" }],
  creator: "Solvex Technology",
  metadataBase: new URL("https://solvextechnology.in"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://solvextechnology.in",
    siteName: "Solvex Technology",
    title: "Solvex Technology - Innovating Digital Success",
    description: "Your trusted partner in digital growth. Web apps, mobile apps, branding & business solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Solvex Technology - Innovating Digital Success",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvex Technology - Innovating Digital Success",
    description: "Your trusted partner in digital growth.",
    images: ["/og-image.png"],
    creator: "@solvextech",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased selection:bg-primary/30`}>
        <JsonLd />
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
            <BackToTop />
            <CookieBanner />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
