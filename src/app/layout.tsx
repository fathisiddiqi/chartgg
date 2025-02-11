import "@/styles/globals.css";
import {
  Inter as FontSans,
  Poppins as FontPoppins,
  Roboto as FontRoboto,
} from "next/font/google";

import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "sonner";

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

export const metadata: Metadata = {
  title: "Chartgg - Chart Builder",
  description:
    "Effortlessly design and customize beautiful charts—no coding required!",
  keywords:
    "chart builder, data visualization, custom charts, chart editor, real-time preview, interactive chart builder, chart customization, data visualization tool, chart design interface, chart maker, graph editor, chart styling, data presentation tool, chart screenshot, chart rich editor, create charts, customize charts, data visualization editor, chartgg, free org chart builder, flow chart builder, gantt chart builder, chart builder ai, excel chart builder",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chartgg.com",
    siteName: "Chartgg",
    title: "Chartgg - Chart Builder",
    description:
      "Effortlessly design and customize beautiful charts—no coding required!",
    images: [
      {
        url: "/og-chartgg.jpg",
        width: 1200,
        height: 630,
        alt: "Chartgg - Chart Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@chartggapp",
    creator: "@chartggapp",
  },
  other: {
    script: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Chartgg",
        description:
          "The best online chart builder to create beautiful visualizations effortlessly.",
        applicationCategory: "WebApplication",
        url: "https://chartgg.com",
        image: "https://chartgg.com/og-chartgg.jpg",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    ] as any,
  },
};

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
        <Toaster />
        {/* Umami */}
        <Script
          src={process.env.NEXT_PUBLIC_UMAMI_URL}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_DATA_WEBSITE_ID}
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
