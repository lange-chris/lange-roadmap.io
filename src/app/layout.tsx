import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christoph Lange | AI-Driven Product Management Portfolio",
  description: "Explore the professional journey of Christoph Lange, a Senior Product Manager specializing in AI Strategy, Agile Transformation, and High-Performance Leadership.",
  keywords: ["Christoph Lange", "Product Manager", "AI Strategy", "Agile Transformation", "neuefische", "XING", "Dragon Boat"],
  authors: [{ name: "Christoph Lange" }],
  openGraph: {
    title: "Christoph Lange | Product Portfolio",
    description: "AI-driven Product Management and Agile Leadership of Christoph Lange.",
    type: "website",
    images: [{ url: "/globe.svg" }]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body className={`${inter.className} selection:bg-blue-500/20`}>
        {children}
      </body>
    </html>
  );
}
