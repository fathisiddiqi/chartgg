import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
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
        <DefaultSeo
          title="Chartgg - Chart Builder"
          description="Effortlessly design and customize beautiful charts—no coding required!"
          canonical="https://chartgg.com"
          openGraph={{
            type: "website",
            locale: "en_US",
            url: "https://chartgg.com/",
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
          }}
          twitter={{
            handle: "@chartggapp",
            site: "@chartggapp",
            cardType: "summary_large_image",
          }}
          additionalMetaTags={[
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1",
            },
            {
              name: "keywords",
              content:
                "charts, data visualization, graphs, analytics, dashboard, statistics, chart maker, chart generator, chart builder, interactive charts, data charts, business charts, line charts, bar charts, pie charts, scatter plots, data analysis, reporting tools, data presentation, chart design, data insights, real-time charts, chart customization, chart templates, chart styles, data plotting, chart editor",
            },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
