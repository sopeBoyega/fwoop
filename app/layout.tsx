import type { Metadata } from "next";
import "./globals.css";
import { inter} from "./fonts/fonts";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Header from "./components/global/header";
import Footer from "./components/global/Footer";
import { Toaster } from "./components/ui/toaster";

export const metadata: Metadata = {
  title: "FWOOP",
  description: "Food Waste Optimization Project",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const navLinks = [
      { name: "About", url: "/" },
      { name: "Gallery", url: "/gallery" },
      { name: "Journal Camp", url: "/journalCamp" },
      { name: "Blog", url: "/blog" }
    ];
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-white text-white`}>
        <Header navLinks={navLinks} />
        <Toaster/>
        <Theme >{children}</Theme>
        <Footer/>
      </body>
    </html>
  );
}
