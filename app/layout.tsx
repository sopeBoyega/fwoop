import type { Metadata } from "next";
import "./globals.css";
import { inter, PJS } from "./fonts/fonts";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Header from "./components/global/header";

export const metadata: Metadata = {
  title: "FWOOP",
  description: "Food Waste Optimization Project",
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
      <body className={`${inter.className}  bg-white text-white`}>
        <Header navLinks={navLinks} />
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
