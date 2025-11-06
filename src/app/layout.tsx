// import type { Metadata } from "next";
// import "./globals.css";
// import { Manrope } from "next/font/google"; 

// const manrope = Manrope({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600", "700", "800"], 
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "Marinate360 – Restaurant POS Software",
//   description:
//     "Digital ordering, kitchen management, delivery tracking for restaurants.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en">
//       <body className={manrope.className} suppressHydrationWarning={true}>
//         {children}
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "marinate360.com",
  description:
    "Marinate360 — a modern restaurant POS and QR ordering software that simplifies dine-in, takeaway, and delivery management with real-time tracking and analytics.",
  keywords: [
    "restaurant POS",
    "QR menu",
    "restaurant software",
    "digital ordering",
    "food delivery tracking",
    "kitchen management",
    "marinate360",
  ],
  authors: [{ name: "Marinate 360 Team" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://marinate360.com" },
  openGraph: {
    type: "website",
    url: "https://marinate360.com",
    title: "marinate360.com",
    description:
      "All-in-one restaurant software for QR ordering, POS billing, delivery tracking, and analytics.",
    siteName: "marinate360.com",
    images: [
      {
        url: "https://marinate360.com/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Marinate360 restaurant POS dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "marinate360.com",
    description:
      "All-in-one POS and digital menu system for restaurants and cafés.",
    images: ["https://marinate360.com/images/og-banner.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
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
