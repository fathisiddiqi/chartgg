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
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <h2 className="mb-2 text-xl font-bold group-hover:text-blue-600">
          {post.title}
        </h2>
        <time className="block mb-2 text-sm text-gray-500">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <p className="text-gray-600">{post.description}</p>
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
