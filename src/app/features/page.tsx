import { Metadata } from "next";
import Navbar from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
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
    gradient: "from-purple-500 to-pink-500",
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
    gradient: "from-pink-500 to-rose-500",
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
    gradient: "from-rose-500 to-orange-500",
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
    gradient: "from-orange-500 to-amber-500",
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
      <Navbar pathname="/features" />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-32 mx-4 sm:mx-6 lg:mx-8 overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white rounded-2xl mt-8">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                Powerful Features for
                <br />
                <span className="text-white">Data Visualization</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
                ChartGG provides all the tools you need to create beautiful,
                interactive charts and visualize your data effectively.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-16 sm:space-y-24">
              {features.map((feature, idx) => (
                <div key={feature.title} className="relative">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Feature Overview */}
                    <div className="space-y-6">
                      <div
                        className={`p-4 bg-gradient-to-r ${feature.gradient} rounded-2xl w-16 h-16 flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110`}
                      >
                        <feature.icon className="w-8 h-8" />
                      </div>
                      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                        {feature.title}
                      </h2>
                      <p className="text-xl text-gray-600">
                        {feature.description}
                      </p>
                    </div>

                    {/* Feature Items Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      {feature.items.map((item) => (
                        <div
                          key={item.title}
                          className="group relative p-6 rounded-xl border bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10 space-y-4">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600">
                              <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold text-lg group-hover:text-purple-600 transition-colors duration-300">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 opacity-10"></div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-8 p-8 rounded-2xl bg-white/50 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Ready to Create Beautiful Charts?
              </h2>
              <p className="text-xl text-gray-600">
                Start visualizing your data with ChartGG today.
              </p>
              <a
                href="/chart-editor"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
