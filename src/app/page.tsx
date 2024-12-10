import Navbar from "@/components/common/navbar";
import {
  BarChartIcon,
  PaletteIcon,
  ShareIcon,
} from "@/components/icon/chart-icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-24">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Create Beautiful Charts
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Customize your chart and share to your audience!
          </p>
          <div className="space-x-4">
            <Button size="lg">
              <Link href="/chart-editor">Get Started</Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <ChartPlaceholder />
        </div>
      </div>
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BarChartIcon className="h-10 w-10" />}
              title="Multiple Chart Types"
              description="Choose from a variety of chart types to best represent your data."
            />
            <FeatureCard
              icon={<PaletteIcon className="h-10 w-10" />}
              title="Easy Customization"
              description="Personalize your charts with custom colors, fonts, and layouts."
            />
            <FeatureCard
              icon={<ShareIcon className="h-10 w-10" />}
              title="One-Click Sharing"
              description="Export and share your charts in various formats instantly."
            />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of users creating stunning visualizations with our
            Chart Builder.
          </p>
          <Button size="lg">Create Your First Chart</Button>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function ChartPlaceholder() {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center mx-auto flex flex-col items-center">
          <div className="">
            <BarChartIcon size={64} />
          </div>
          <p className="text-lg font-semibold text-gray-800">Your Chart Here</p>
        </div>
      </div>
    </div>
  );
}
