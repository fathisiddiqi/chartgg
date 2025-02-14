import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Navbar from "@/components/marketing/navbar";

export const metadata: Metadata = {
  title: "ChartGG Blog - Data Visualization Insights",
  description:
    "Explore articles about data visualization, chart creation, and design best practices from the ChartGG team.",
  alternates: {
    canonical: "https://chartgg.com/blog",
  },
  openGraph: {
    title: "ChartGG Blog - Data Visualization Insights",
    description:
      "Explore articles about data visualization, chart creation, and design best practices from the ChartGG team.",
    type: "website",
    url: "https://chartgg.com/blog",
    images: ["/blog/chartgg-intro.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChartGG Blog - Data Visualization Insights",
    description:
      "Explore articles about data visualization, chart creation, and design best practices from the ChartGG team.",
    images: ["/blog/chartgg-intro.png"],
  },
};

export default function BlogPage() {
  // Get all blog posts
  const blogDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(blogDir);

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
          <div className="space-y-8">
            {sortedPosts.map((post) => (
              <article
                key={post.slug}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {post.image && (
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-semibold mb-2 hover:text-primary">
                      {post.title}
                    </h2>
                  </Link>
                  <time className="text-sm text-gray-500 mb-3 block">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <p className="text-gray-700">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
