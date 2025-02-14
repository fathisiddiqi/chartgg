import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChartAreaIcon,
  DatabaseIcon,
  PaletteIcon,
  ShareIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Navbar from "@/components/marketing/navbar";
import { Metadata } from "next";
import { HomeSchema } from "@/components/marketing/home-schema";

export const metadata: Metadata = {
  title: "ChartGG - Create Beautiful Charts and Visualizations",
  description:
    "Create charts and data visualizations with ChartGG. Easy to use, powerful features, and beautiful results.",
  openGraph: {
    title: "ChartGG - Create Beautiful Charts and Visualizations",
    description:
      "Create charts and data visualizations with ChartGG. Easy to use, powerful features, and beautiful results.",
    type: "website",
    url: "https://chartgg.com",
    siteName: "ChartGG",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChartGG - Create Beautiful Charts and Visualizations",
    description:
      "Create charts and data visualizations with ChartGG. Easy to use, powerful features, and beautiful results.",
    creator: "@chartgg",
    site: "@chartgg",
  },
  alternates: {
    canonical: "https://chartgg.com",
  },
};

export default function LandingPage() {
  return (
    <>
      <HomeSchema />
      <main className="flex flex-col min-h-screen mx-auto max-w-[1280px]">
        <Navbar />
        <div className="h-20 md:h-32" />
        <Hero />
        <div className="h-20 md:h-20" />
        <ChartPlaceholder />
        <div className="h-20 md:h-24" />
        <Features />
        <div className="h-20 md:h-24" />
        <GetStartedFree />
        <div className="h-20 md:h-24" />
        <Footer />
      </main>
    </>
  );
}

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto px-4 text-center space-y-4">
        <h1 className="text-5xl font-bold">
          Create <span className="cycle-text" /> charts <br /> in minutes
        </h1>
        <h1 className="text-xl text-muted-foreground">
          Effortlessly design and customize beautiful charts—no coding required!
        </h1>
        <a href="/chart-editor" className="inline-block">
          <Button size="lg">Try it now!</Button>
        </a>
      </div>
    </section>
  );
};

function ChartPlaceholder() {
  return (
    <div className="relative w-72 h-autoaspect-square mx-auto px-4 md:px-0 md:max-w-[500px]">
      <div className="flex items-center justify-center">
        <div className="text-center mx-auto flex flex-col items-center rounded-lg">
          <Image
            src="./chart-placeholder.gif"
            alt="Placeholder Image 1"
            width={800}
            height={800}
            className="rounded-lg w-72 h-auto"
          />
        </div>
      </div>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: <DatabaseIcon size={16} />,
      feature: "Data Input",
      title: "Flexible Data Management",
      description:
        "Create data from scratch with our minimalist editor or import existing data from CSV, Excel, or JSON files. Simple, fast, and hassle-free!",
      image: "./create-data.gif",
      highlight: "New",
    },
    {
      icon: <ChartAreaIcon size={16} />,
      feature: "Chart Types",
      title: "Powerful Visualization Options",
      description:
        "Choose from a variety of chart types including bar, line, pie, scatter plots, and more. Find the perfect visualization for your data story!",
      image: "./choose-chart.gif",
    },
    {
      icon: <SlidersHorizontalIcon size={16} />,
      feature: "Advanced Customization",
      title: "Complete Control Over Your Charts",
      description:
        "Fine-tune every aspect of your charts with our comprehensive customization options. Adjust axes, legends, tooltips, and data labels with ease!",
      image: "./customize-chart.gif",
    },
    {
      icon: <PaletteIcon size={16} />,
      feature: "Style Options",
      title: "Beautiful Design Made Simple",
      description:
        "Make your charts stand out with our professional styling options. Choose from pre-built themes, customize colors, frames, and backgrounds!",
      image: "./style-chart.gif",
    },
    {
      icon: <ShareIcon size={16} />,
      feature: "Export & Share",
      title: "Share Your Insights",
      description:
        "Export your charts in multiple formats (PNG, SVG, PDF) with high resolution. Perfect for presentations, reports, or embedding in your applications!",
      image: "./download-chart.gif",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16" id="features">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
        <p className="text-xl text-muted-foreground">
          Everything you need to create beautiful and insightful data
          visualizations
        </p>
      </div>

      <div className="space-y-32">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 gap-12 items-center md:grid-cols-2 md:gap-16 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="space-x-2 flex items-center"
                  >
                    {feature.icon}
                    <span className="text-sm font-medium">
                      {feature.feature}
                    </span>
                  </Button>
                  {feature.highlight && (
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                      {feature.highlight}
                    </span>
                  )}
                </div>
                <h3 className="text-3xl font-bold tracking-tight">
                  {feature.title}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
            <div className="relative group">
              <div className="relative overflow-hidden rounded-xl border bg-background shadow-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Get started for free section
function GetStartedFree() {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started for Free</h2>
        <p className="text-gray-600 mb-8">
          Start creating beautiful charts today. No credit card required.
        </p>
        <div className="bg-primary/5 rounded-lg p-8 mb-8">
          <div className="grid gap-6">
            <div className="flex items-center gap-3">
              <svg
                className="h-5 w-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Unlimited charts and visualizations</span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="h-5 w-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Export to PNG, SVG, and PDF</span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="h-5 w-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Basic customization options</span>
            </div>
          </div>
        </div>
        <a
          href="/chart-editor"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Start Creating Charts
        </a>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="container mx-auto px-4" id="pricing">
      <h2 className="text-3xl font-bold text-center mb-20">Pricing</h2>
      <Card className="md:w-[400px] w-md mx-auto p-8 space-y-6 shadow-sm">
        <CardContent className="space-y-4">
          <h3 className="text-xl font-bold">Pro</h3>
          <div>
            <div className="flex items-baseline">
              <h4 className="text-5xl font-bold line-through">$10</h4>
              <p className="text-xl font-medium">/month</p>
            </div>
            <p className="mt-2 font-medium text-green-600 text-xl">Free</p>
          </div>
          <div className="space-y-4">
            <h5 className="text-lg text-gray-600">Get Unlimited Features</h5>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="text-base">Unlimited Charts - Cloud</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="text-base">Unlimited Features</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="text-base">High Resolution Export</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <a href="/chart-editor" className="w-full">
            <Button size="lg" className="w-full">
              Get It Now!
            </Button>
          </a>
        </CardFooter>
      </Card>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col w-full h-20 mt-auto bg-white border-t border-muted mb-4 md:mb-0">
      <div className="flex flex-col md:flex-row w-full h-full p-4 space-y-4 md:space-y-0 md:space-x-4 justify-between items-center">
        <p className="text-base">&copy; 2025 Chartgg. All rights reserved.</p>
        <p className="text-center md:text-left">
          Created with <span className="text-red-500">&hearts;</span> by{" "}
          <a href="https://twitter.com/fathisiddiqi" className="underline">
            fathisiddiqi
          </a>
        </p>
      </div>
    </footer>
  );
}
