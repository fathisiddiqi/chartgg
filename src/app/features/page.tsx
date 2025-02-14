import { Metadata } from "next";
import Navbar from "@/components/marketing/navbar";
import {
  ChartAreaIcon,
  SlidersHorizontalIcon,
  BarChart3Icon,
  LineChartIcon,
  PieChartIcon,
  ScatterChartIcon,
  Axis3dIcon,
  ListIcon,
  MessageCircleIcon,
  TypeIcon,
  PaletteIcon,
  LayoutTemplateIcon,
  AppWindowMacIcon,
  BoxIcon,
  TableIcon,
  FileUpIcon,
  PencilIcon,
  DatabaseIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "ChartGG Features - Create Beautiful Data Visualizations | Modern Chart Builder",
  description:
    "Explore ChartGG's powerful features: interactive charts, real-time data editing, custom styling, and multiple export options. Create professional data visualizations in minutes with our modern chart builder.",
  keywords:
    "data visualization, chart maker, interactive charts, data analysis, business intelligence, chart builder, data visualization tools",
  alternates: {
    canonical: "https://chartgg.com/features",
  },
  openGraph: {
    title:
      "ChartGG Features - Create Beautiful Data Visualizations | Modern Chart Builder",
    description:
      "Explore ChartGG's powerful features: interactive charts, real-time data editing, custom styling, and multiple export options. Create professional data visualizations in minutes with our modern chart builder.",
    type: "website",
    url: "https://chartgg.com/features",
    siteName: "ChartGG",
    images: [
      {
        url: "/og/features-preview.png",
        width: 1200,
        height: 630,
        alt: "ChartGG Features Preview - Interactive Chart Builder",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChartGG Features - Create Beautiful Data Visualizations",
    description:
      "Create professional charts with ChartGG's powerful features. Interactive editing, custom styling, and multiple export options. Start visualizing your data today!",
    images: ["/og/features-preview.png"],
    creator: "@chartgg",
    site: "@chartgg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const features = [
  {
    title: "Chart Types",
    description:
      "Create a wide variety of charts including bar, line, pie, and scatter plots.",
    icon: ChartAreaIcon,
    items: [
      {
        title: "Bar Charts",
        description:
          "Vertical, horizontal, and stacked bar charts for comparison",
        icon: BarChart3Icon,
      },
      {
        title: "Line Charts",
        description: "Trend visualization with multiple series support",
        icon: LineChartIcon,
      },
      {
        title: "Pie Charts",
        description:
          "Circular statistical visualization for part-to-whole relationships",
        icon: PieChartIcon,
      },
      {
        title: "Scatter Plots",
        description: "Visualize relationships between variables",
        icon: ScatterChartIcon,
      },
    ],
  },
  {
    title: "Data Management",
    description:
      "Flexible data input options to get your data visualization started quickly.",
    icon: DatabaseIcon,
    items: [
      {
        title: "Minimalist Editor",
        description:
          "Create and edit data directly with our simple spreadsheet interface",
        icon: PencilIcon,
      },
      {
        title: "File Import",
        description: "Import data from CSV, Excel, or JSON files",
        icon: FileUpIcon,
      },
      {
        title: "Data Table",
        description: "View and edit your data in a familiar table format",
        icon: TableIcon,
      },
      {
        title: "Sample Data",
        description: "Start with sample datasets to explore chart features",
        icon: DatabaseIcon,
      },
    ],
  },
  {
    title: "Customization",
    description:
      "Customize every aspect of your charts to match your brand and needs.",
    icon: SlidersHorizontalIcon,
    items: [
      {
        title: "Axis Customization",
        description: "Customize X and Y axes with labels, ticks, and gridlines",
        icon: Axis3dIcon,
      },
      {
        title: "Legend Options",
        description: "Flexible legend positioning, styling, and interactivity",
        icon: ListIcon,
      },
      {
        title: "Tooltips & Interactions",
        description:
          "Rich tooltips with custom formatting and hover interactions",
        icon: MessageCircleIcon,
      },
      {
        title: "Data Labels",
        description: "Add and style data labels with custom formatting",
        icon: TypeIcon,
      },
    ],
  },
  {
    title: "Style Options",
    description:
      "Customize the look and feel of your charts with comprehensive styling options.",
    icon: PaletteIcon,
    items: [
      {
        title: "Themes",
        description:
          "Choose from pre-built themes or create your own custom theme",
        icon: LayoutTemplateIcon,
      },
      {
        title: "Frame & Background",
        description: "Customize frame style, borders, and background colors",
        icon: BoxIcon,
      },
      {
        title: "Aspect Ratio",
        description: "Set custom dimensions and aspect ratios for your charts",
        icon: AppWindowMacIcon,
      },
      {
        title: "Color Palette",
        description: "Define custom color schemes and gradients",
        icon: PaletteIcon,
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              Powerful Features for Data Visualization
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ChartGG provides all the tools you need to create beautiful,
              interactive charts and visualize your data effectively.
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-24">
            {features.map((feature) => (
              <section key={feature.title} className="relative">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Feature Overview */}
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold">{feature.title}</h2>
                    <p className="text-gray-600 text-lg">
                      {feature.description}
                    </p>
                  </div>

                  {/* Feature Items Grid */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    {feature.items.map((item) => (
                      <div
                        key={item.title}
                        className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
                      >
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <div className="max-w-2xl mx-auto p-8 rounded-lg bg-primary/5">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Create Beautiful Charts?
              </h2>
              <p className="text-gray-600 mb-6">
                Start visualizing your data with ChartGG today.
              </p>
              <a
                href="/chart-editor"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
