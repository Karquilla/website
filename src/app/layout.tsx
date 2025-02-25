import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const arcadeOut  = localFont({
  src: "./fonts/arcadeOut.ttf",
  variable: "--font-arcade-out",
  weight: "100 900",
});

const arcadeK  = localFont({
  src: "./fonts/arcadeK.ttf",
  variable: "--font-arcade-k",
  weight: "100 900",
});

const sublimaBold  = localFont({
  src: "./fonts/Sublima-ExtraBold.ttf",
  variable: "--font-sublima-bold",
  weight: "100 900",
});

const sublimaLight  = localFont({
  src: "./fonts/Sublima-ExtraLight.ttf",
  variable: "--font-sublima-light",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kyle Arquilla",
  description: "Created by Kyle Arquilla using React.js and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sublimaBold.variable} ${sublimaLight.variable} ${geistSans.variable} ${geistMono.variable} ${arcadeOut.variable} ${arcadeK.variable}  antialiased`}
      >
        {children}
        <footer>
          © 2025 Kyle Arquilla. All rights reserved. Artwork by Melissa Douglas.
        </footer>
      </body>
      
    </html>
  );
}
