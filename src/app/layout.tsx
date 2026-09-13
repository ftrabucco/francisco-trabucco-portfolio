import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Francisco Trabucco | QA Automation y SDET",
  description:
    "Portfolio profesional de Francisco Trabucco, enfocado en QA Automation, SDET y calidad de software.",
  openGraph: {
    type: "website",
    siteName: "Francisco Trabucco",
    title: "Francisco Trabucco | QA Automation y SDET",
    description:
      "Portfolio profesional enfocado en QA Automation, SDET y calidad de software.",
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
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
