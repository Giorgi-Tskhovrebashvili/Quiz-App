import type { Metadata } from "next";
import Rubik from "next/font/local";
import "./globals.css";
import ThemeProvider from "./common/components/_molecules/Themes/ThemeProvider";

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
      <head>
        <meta charSet="UTF-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-icon_149152-813.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Quiz App</title>
      </head>
      <body className={rubik.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
