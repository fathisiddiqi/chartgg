import "@/styles/globals.css";
import {
  Inter as FontSans,
  Poppins as FontPoppins,
  Roboto as FontRoboto,
} from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontPoppins = FontPoppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

const fontRoboto = FontRoboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontPoppins.variable,
          fontRoboto.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
