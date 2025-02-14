export function HomeSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ChartGG",
    description: "Create beautiful charts and visualizations with ChartGG",
    url: "https://chartgg.com",
    potentialAction: [
      {
        "@type": "ViewAction",
        target: [
          "https://chartgg.com/features",
          "https://chartgg.com/chart-editor",
          "https://chartgg.com/blog",
        ],
      },
    ],
    sameAs: ["https://twitter.com/chartgg", "https://github.com/chartgg"],
    hasPart: [
      {
        "@type": "WebPage",
        name: "Features",
        description: "Explore ChartGG's powerful charting features",
        url: "https://chartgg.com/features",
      },
      {
        "@type": "WebPage",
        name: "Chart Editor",
        description: "Create and customize charts with our interactive editor",
        url: "https://chartgg.com/chart-editor",
      },
      {
        "@type": "WebPage",
        name: "Blog",
        description:
          "Learn about data visualization and charting best practices",
        url: "https://chartgg.com/blog",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
