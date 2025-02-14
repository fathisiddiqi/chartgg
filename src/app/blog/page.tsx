import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Navbar from "@/components/marketing/navbar";

export const metadata: Metadata = {
  title: "ChartGG Blog - Expert Data Visualization Insights & Tutorials",
  description:
    "Discover expert insights on data visualization, chart design best practices, and tutorials. Learn how to create effective charts and visualizations with ChartGG.",
  keywords: [
    "data visualization",
    "chart design",
    "data visualization tutorials",
    "chart best practices",
    "ChartGG",
    "data visualization tools",
  ],
  alternates: {
    canonical: "https://chartgg.com/blog",
  },
  openGraph: {
    title: "ChartGG Blog - Expert Data Visualization Insights & Tutorials",
    description:
      "Discover expert insights on data visualization, chart design best practices, and tutorials. Learn how to create effective charts and visualizations with ChartGG.",
    type: "website",
    url: "https://chartgg.com/blog",
    images: [
      {
        url: "/blog/chartgg-intro.png",
        width: 1200,
        height: 630,
        alt: "ChartGG Blog - Data Visualization Insights",
      },
    ],
    siteName: "ChartGG",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChartGG Blog - Expert Data Visualization Insights & Tutorials",
    description:
      "Discover expert insights on data visualization, chart design best practices, and tutorials. Learn how to create effective charts and visualizations with ChartGG.",
    images: ["/blog/chartgg-intro.png"],
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

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  image?: string;
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block group hover:no-underline"
    >
      <article className="relative h-full overflow-hidden rounded-lg">
        {post.image && (
          <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true}
            />
          </div>
        )}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight text-gray-800 group-hover:text-primary transition-colors duration-200">
            {post.title}
          </h2>
          <p className="text-sm text-gray-500">{post.date}</p>
          <p className="text-gray-600">{post.description}</p>
        </div>
      </article>
    </Link>
  );
}

export default function BlogPage() {
  // Get all blog posts
  const blogDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);

    return {
      slug: filename.replace(".mdx", ""),
      title: frontMatter.title,
      date: frontMatter.date,
      description: frontMatter.description,
      image: frontMatter.image,
    };
  });

  // Sort posts by date
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <div className="grid gap-8 md:grid-cols-2">
            {sortedPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
