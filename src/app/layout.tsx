import type { Metadata, Viewport } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const displayFont = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://students.flowsight.site").replace(/\/$/, "");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfcfb" },
    { media: "(prefers-color-scheme: dark)", color: "#101d25" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FlowSight Students | Private focus for every learner",
    template: "%s | FlowSight Students",
  },
  description: "Equip students with their own private FlowSight Individual workspace through an organization pilot.",
  applicationName: "FlowSight Students",
  icons: {
    icon: [{ url: "/flowsight-icon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/flowsight-icon-180.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: { canonical: siteUrl },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
