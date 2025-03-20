import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Footer } from "@/components/marketing/footer";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
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
      <article className="relative h-full overflow-hidden rounded-xl bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20">
        {post.image && (
          <div className="relative h-64 overflow-hidden rounded-t-xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
        <div className="p-6 space-y-3">
          <h2 className="text-xl font-bold tracking-tight text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
            {post.title}
          </h2>
          <p className="text-sm font-medium text-purple-500">
            {formatDate(post.date)}
          </p>
          <p className="text-gray-600 line-clamp-3">{post.description}</p>
        </div>
      </article>
    </Link>
  );
}

export default function BlogPage() {
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

  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredPost = sortedPosts[0];
  const remainingPosts = sortedPosts.slice(1);

  return (
    <>
      <Navbar pathname="/blog" />
      <main className="min-h-screen pt-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="py-12 sm:py-16 lg:py-24">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Data Visualization Insights
              </h1>
              <p className="text-lg sm:text-xl text-gray-600">
                Expert tutorials, best practices, and the latest trends in chart
                design
              </p>
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Featured Article
              </h2>
              <Link href={`/blog/${featuredPost.slug}`} className="block group">
                <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  {featuredPost.image && (
                    <div className="relative h-96 overflow-hidden">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 p-8 text-white">
                        <h3 className="text-3xl font-bold mb-4">
                          {featuredPost.title}
                        </h3>
                        <p className="text-lg text-gray-200">
                          {featuredPost.description}
                        </p>
                        <p className="mt-4 text-purple-200">
                          {formatDate(featuredPost.date)}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          )}

          {/* Recent Posts Grid */}
          <div className="pb-24">
            <h2 className="text-2xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Recent Articles
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {remainingPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
