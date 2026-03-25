import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The EDEN Foundation — Early Developmental Education & Nurturing",
  description:
    "Restoring dignity, trust, and excellence to early childhood care across America. Because the youngest of us will be the best of us.",
  openGraph: {
    title: "The EDEN Foundation",
    description:
      "Restoring dignity, trust, and excellence to early childhood care across America.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The EDEN Foundation",
    description:
      "Restoring dignity, trust, and excellence to early childhood care across America.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
