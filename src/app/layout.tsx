import type { Metadata } from "next";
import Rubik from "next/font/local";
import "./globals.css";
import ThemeProvider from "./common/components/Themes/ThemeProvider";

const rubik = Rubik({
  src: "/fonts/Rubik-VariableFont_wght.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontend Quizz App",
  description: "A frontend quiz app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
