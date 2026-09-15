import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Francisco Trabucco | QA Automation & SDET",
  description:
    "Professional portfolio for Francisco Trabucco, focused on QA Automation, SDET and software quality.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Francisco Trabucco",
    title: "Francisco Trabucco | QA Automation & SDET",
    description:
      "Professional portfolio focused on QA Automation, SDET and software quality.",
  },
};

export const viewport: Viewport = {
  themeColor: "#081120",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
