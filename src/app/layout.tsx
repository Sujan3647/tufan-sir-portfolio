import type { Metadata } from "next";
import { Inter, EB_Garamond, Space_Grotesk, JetBrains_Mono, Playfair_Display, DM_Sans } from "next/font/google"; 
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const ebGaramond = EB_Garamond({ subsets: ["latin"], variable: "--font-eb-garamond", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Dr. Tufan Singha Mahapatra | Assistant Professor",
  description: "Academic portfolio of Dr. Tufan Singha Mahapatra - Chemistry Professor & Researcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ebGaramond.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased font-sans flex flex-col min-h-screen overflow-x-hidden max-w-[100vw] text-slate-900 bg-[#fafafc] selection:bg-indigo-100 selection:text-indigo-900">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
