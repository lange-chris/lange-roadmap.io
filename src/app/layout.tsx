import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lange Roadmap | Chris Lange Career Journey",
  description: "A premium interactive roadmap detailing the professional journey and vision of Chris Lange.",
  keywords: ["Chris Lange", "Roadmap", "Career Journey", "Professional Portfolio"],
  authors: [{ name: "Chris Lange" }],
  openGraph: {
    title: "Lange Roadmap",
    description: "Explorer the professional journey of Chris Lange.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} selection:bg-white/20`}>
        {children}
      </body>
    </html>
  );
}
