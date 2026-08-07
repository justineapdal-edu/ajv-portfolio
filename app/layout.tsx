import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justine Apdal — Web Developer, Graphic Specialist & Video Editor",
  description:
    "Portfolio of Justine Apdal — a multi-disciplinary creator building fast, editorial-grade websites, bold visual identities, and motion-driven video content.",
  keywords: [
    "Web Developer",
    "Next.js",
    "React",
    "Graphic Design",
    "Brand Identity",
    "Video Editor",
    "Motion Graphics",
    "Portfolio",
  ],
  openGraph: {
    title: "Justine Apdal — Web Developer, Graphic Specialist & Video Editor",
    description:
      "Multi-disciplinary portfolio spanning web development, graphic design, and video editing.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
