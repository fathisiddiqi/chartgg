import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChartAreaIcon,
  DatabaseIcon,
  PaletteIcon,
  ShareIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import Navbar from "@/components/marketing/navbar";
import { Metadata } from "next";
import { HomeSchema } from "@/components/marketing/home-schema";
import { Footer } from "@/components/marketing/footer";
import HowItWorks from "@/components/marketing/how-it-works";

// Metadata tetap sama
export const metadata: Metadata = {
  title: "ChartGG - Create Beautiful Charts and Visualizations",
  description:
    "Create charts and data visualizations with ChartGG. Easy to use, powerful features, and beautiful results.",
  openGraph: {
    /* sama */
  },
  twitter: {
    /* sama */
  },
  alternates: { canonical: "https://chartgg.com" },
};

export default function LandingPage() {
  return (
    <>
      <HomeSchema />
      <Navbar pathname="/" />
      <Hero />
      <Features />
      {/* <HowItWorks /> */}
      <GetStartedFree />
      <Footer />
    </>
  );
}

const Hero = () => {
  return (
    <section className="relative py-32 mx-4 sm:mx-6 lg:mx-8 overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white rounded-2xl mt-16">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Craft Stunning
              <br />
              <span className="text-white">Charts In a Flash</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100">
              Transform your data into beautiful visualizations instantly. Zero
              expertise required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/chart-editor" className="inline-block">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-purple-600 hover:bg-purple-50 font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
                >
                  Get Started Free
                </Button>
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <Image
                src="/chart-placeholder.gif"
                alt="ChartGG Editor Preview"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function Features() {
  const features = [
    {
      icon: <DatabaseIcon size={24} className="text-purple-600" />,
      title: "Effortless Data Import",
      description:
        "Import any data format instantly or start fresh with our intuitive editor.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <ChartAreaIcon size={24} className="text-pink-600" />,
      title: "Stunning Visualizations",
      description:
        "Transform complex data into compelling visual stories that captivate.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <SlidersHorizontalIcon size={24} className="text-rose-600" />,
      title: "Pixel-Perfect Control",
      description:
        "Customize every detail to create your perfect visualization.",
      gradient: "from-rose-500 to-orange-500",
    },
    {
      icon: <DatabaseIcon size={24} className="text-orange-600" />,
      title: "Real-Time Data Power",
      description:
        "Stay current with live data connections to your favorite platforms.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: <PaletteIcon size={24} className="text-amber-600" />,
      title: "Professional Styling",
      description: "Make your brand shine with our advanced design tools.",
      gradient: "from-amber-500 to-yellow-500",
    },
    {
      icon: <ShareIcon size={24} className="text-yellow-600" />,
      title: "Universal Sharing",
      description: "Share your insights anywhere, in any format you need.",
      gradient: "from-yellow-500 to-green-500",
    },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-b from-white to-purple-50"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            What Makes ChartGG Special?
          </h2>
          <p className="text-xl text-gray-600">
            Your all-in-one toolkit for stunning data visualization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
              <div className="relative z-10 space-y-6">
                <div
                  className={`p-3 bg-gradient-to-r ${feature.gradient} rounded-2xl w-14 h-14 flex items-center justify-center text-white shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GetStartedFree() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 opacity-10"></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Unleash Your Data Potential
          </h2>
          <p className="text-xl text-gray-600">
            Transform your data into stunning visuals in minutes — completely
            free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/chart-editor" className="inline-block">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
              >
                Start Now—Free
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
