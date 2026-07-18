import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: "Cardify — Cards That Come Alive | AR Greeting Cards & Business Cards",
  description: "Premium Augmented Reality greeting cards, wedding invitations, and business cards. Scan, experience, and share unforgettable moments. India's first AR-powered card platform.",
  keywords: "AR cards, augmented reality cards, greeting cards, wedding invitations, business cards, AR business cards, video greeting cards, India",
  openGraph: {
    title: "Cardify — Cards That Come Alive",
    description: "Premium AR greeting cards and business cards that come alive when scanned.",
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
      <body className={`${inter.variable} ${grotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
