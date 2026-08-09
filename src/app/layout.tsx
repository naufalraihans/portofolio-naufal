import type { Metadata } from "next";
import { JetBrains_Mono, STIX_Two_Text } from "next/font/google";
import "./globals.css";

// Computer-Modern math font (STIX Two Math) — the visual identity of Manim's
// MathTex. Loaded as latin + math subsets via the STIX_Two_Text google font.
const stix = STIX_Two_Text({
  variable: "--font-math",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naufal Raihan S | Electrical Engineering",
  description: "gak ngerti SEO, ajarin dong puh sepuh , plis ajarin, gatau soalnya owkowkow",
  icons: {
    icon: "/images/logoWeb.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${stix.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}