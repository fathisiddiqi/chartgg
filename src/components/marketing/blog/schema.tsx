export function BlogPostSchema({
  title,
  description,
  date,
  author,
  image,
  url,
}: {
  title: string;
  description: string;
  date: string;
  author: { name: string; url: string };
  image: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: image ? `https://chartgg.com${image}` : "https://chartgg.com/og-image.png",
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
    },
    publisher: {
      "@type": "Organization",
      name: "ChartGG",
      logo: {
        "@type": "ImageObject",
        url: "https://chartgg.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
