import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LevelUp NationX - Powering Businesses with Websites & AI",
  description: "Transform your business with cutting-edge websites and intelligent AI solutions. We help startups and local businesses thrive in the digital age.",
  keywords: "website templates, custom websites, AI receptionists, AI automation, business solutions, startup websites",
  authors: [{ name: "LevelUp NationX" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "LevelUp NationX - Powering Businesses with Websites & AI",
    description: "Transform your business with cutting-edge websites and intelligent AI solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LevelUp NationX - Powering Businesses with Websites & AI",
    description: "Transform your business with cutting-edge websites and intelligent AI solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
