import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google"; 

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marinate360 – Restaurant POS Software",
  description:
    "Digital ordering, kitchen management, delivery tracking for restaurants.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={manrope.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
