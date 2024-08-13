import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrea's Next",
  description: "Skill-up project for Next.js by Andrea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <header>여기부터 header</header>
        {children}
        <footer>여기부터 footer</footer>
      </body>
    </html>
  );
}
