import type { Metadata } from "next";
import "./globals.css";
import { inter, PJS } from "./fonts/fonts";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export const metadata: Metadata = {
  title: "FWOOP",
  description: "Food Waste Optimization Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-white text-white`}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
