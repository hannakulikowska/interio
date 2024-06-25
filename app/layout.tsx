import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dmSerifDisplay",
});

export const metadata: Metadata = {
  title: "Interio",
  description: "Pozwól nam sprawić, że Twój dom będzie wyjątkowy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={dmSerifDisplay.className}>{children}</body>
    </html>
  );
}
