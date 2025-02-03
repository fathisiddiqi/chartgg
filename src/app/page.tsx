import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Text } from "@/components/ui/text";
import {
  BrushIcon,
  ChartAreaIcon,
  DownloadIcon,
  SlidersHorizontalIcon,
  TableIcon,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export const metadata = {
  title: "Chartgg - Chart Builder",
  description:
    "Effortlessly design and customize beautiful charts—no coding required!",
  keywords:
    "chart builder, data visualization, custom charts, chart editor, real-time preview, interactive chart builder, chart customization, data visualization tool, chart design interface, chart maker, graph editor, chart styling, data presentation tool, chart screenshot, chart rich editor, create charts, customize charts, data visualization editor, chart builder, chartgg",
  viewport: "width=device-width, initial-scale=1",
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
};

export default function LandingPage() {
  return (
    <>
      <main className="flex flex-col min-h-screen mx-auto max-w-[1280px]">
        <Navbar />
        <div className="h-20 md:h-32" />
        <Hero />
        <div className="h-20 md:h-24" />
        <ChartPlaceholder />
        <div className="h-20 md:h-24" />
        <Features />
        <div className="h-20 md:h-24" />
        <Pricing />
        <div className="h-20 md:h-24" />
        <Footer />
      </main>
    </>
  );
}

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex h-12 shrink-0 items-center px-4 sm:px-12 border-b-2 border-muted z-50 max-w-[1280px] mx-auto bg-white rounded-md">
      <Link href="/" className="mr-6 flex items-center" prefetch={false}>
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <span className="ml-2 text-xl font-bold">Chartgg</span>
        <span className="ml-2 inline-flex items-center rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary ring-1 ring-inset ring-primary/20">
          Beta
        </span>
      </Link>
      <NavigationMenu className="hidden md:flex justify-center">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <a
              href="#features"
              className="group inline-flex h-6 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              Features
            </a>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <a
              href="#pricing"
              className="group inline-flex h-6 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              Pricing
            </a>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <Button
        size="sm"
        variant="default"
        className="ml-auto flex gap-2 justify-end"
      >
        <a href="/chart-editor" className="hidden sm:inline">
          Go to Editor
        </a>
        <a href="/chart-editor" className="sm:hidden">
          Editor
        </a>
      </Button>
    </header>
  );
};

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto px-4 text-center space-y-4">
        <Text variant="5xl" className="font-bold">
          Create Stunning Charts <br /> in Minutes
        </Text>
        <Text variant="lg" className="text-muted-foreground">
          Effortlessly design and customize beautiful charts—no coding required!
        </Text>
        <Button size="lg">
          <a href="/chart-editor">Try it now!</a>
        </Button>
      </div>
    </section>
  );
};

function ChartPlaceholder() {
  return (
    <div className="relative w-full aspect-square mx-auto px-4 md:px-0 md:max-w-[500px]">
      <div className="flex items-center justify-center">
        <div className="text-center mx-auto flex flex-col items-center rounded-lg">
          <Image
            src="./chart-placeholder.gif"
            alt="Placeholder Image 1"
            width={1200}
            height={1200}
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section className="container mx-auto px-4" id="features">
      <h2 className="text-3xl font-bold text-center mb-20 md:mb-40">
        Features
      </h2>
      <div className="md:space-y-40 space-y-10">
        {[
          {
            icon: <TableIcon size={14} />,
            feature: "Create Data",
            title: "Effortlessly Create Stunning Charts",
            description:
              "Transform your data into beautiful, insightful charts with our intuitive and user-friendly interface. Simple, fast, and hassle-free!",
            image: "./create-data.gif",
          },
          {
            icon: <ChartAreaIcon size={14} />,
            feature: "Choose Chart",
            title: "Select the Perfect Chart",
            description:
              "Pick the ideal chart for your data—bar, line, pie, and more. Visualize your insights effortlessly!",
            image: "./choose-chart.gif",
          },
          {
            icon: <SlidersHorizontalIcon size={14} />,
            feature: "Customize Chart",
            title: "Personalize Your Chart",
            description:
              "Tailor your chart to perfection—add a title, legend, adjust the x-axis, and more. Make it truly yours!",
            image: "./customize-chart.gif",
          },
          {
            icon: <BrushIcon size={14} />,
            feature: "Style Chart",
            title: "Fine-Tune Your Chart’s Style",
            description:
              "Design a stunning chart—adjust the frame, set the background color, and refine every detail effortlessly!",
            image: "./style-chart.gif",
          },
          {
            icon: <DownloadIcon size={14} />,
            feature: "Download Chart",
            title: "Export Your Chart in High Quality",
            description:
              "Save your chart in PNG, JPEG, or PDF with HD resolution—perfect for presentations, reports, and sharing!",
            image: "./download-chart.gif",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 md:gap-8"
          >
            <div className="space-y-4">
              <Button
                variant="outline"
                size="sm"
                className="space-x-2 flex flex-row"
              >
                {feature.icon}
                <Text variant="xs">{feature.feature}</Text>
              </Button>
              <Text variant="2xl" className="font-bold">
                {feature.title}
              </Text>
              <Text variant="base" className="text-muted-foreground">
                {feature.description}
              </Text>
            </div>
            <div className="w-full h-64 rounded-md">
              <Image
                src={feature.image}
                alt={`Feature Image ${index + 1}`}
                width={1200}
                height={1200}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="container mx-auto px-4" id="pricing">
      <Text variant="3xl" className="font-bold text-center mb-20">
        Pricing
      </Text>
      <Card className="md:w-[400px] w-md mx-auto p-8 space-y-6 shadow-sm">
        <CardContent className="space-y-4">
          <Text variant="xl" className="font-bold">
            Pro
          </Text>
          <div>
            <div className="flex items-baseline">
              <Text variant="5xl" className="font-bold line-through">
                $10
              </Text>
              <Text variant="xl" className="font-medium">
                /month
              </Text>
            </div>
            <Text variant="xl" className="mt-2 font-medium text-green-600">
              Free
            </Text>
          </div>
          <div className="space-y-4">
            <Text variant="lg" className="text-gray-600">
              Get Unlimited Features
            </Text>
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
                <Text variant="base">Unlimited Charts - Cloud</Text>
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
                <Text variant="base">Unlimited Features</Text>
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
                <Text variant="base">High Resolution Export</Text>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button size="lg" className="w-full">
            Get It Now!
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col w-full h-20 mt-auto bg-white border-t border-muted mb-4 md:mb-0">
      <div className="flex flex-col md:flex-row w-full h-full p-4 space-y-4 md:space-y-0 md:space-x-4 justify-between items-center">
        <Text variant="base"> 2025 Chartgg. All rights reserved.</Text>
        <Text className="text-center md:text-left">
          Created with by{" "}
          <a href="https://twitter.com/fathisiddiqi" className="underline">
            fathisiddiqi
          </a>
        </Text>
      </div>
    </footer>
  );
}
