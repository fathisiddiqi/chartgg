import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { format } from "date-fns";

interface RelatedPost {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
  author?: {
    name: string;
    image?: string;
  };
}

export function RelatedPosts({
  currentSlug,
  tags,
}: {
  currentSlug: string;
  tags?: string[];
}) {
  // Get all blog posts
  const files = fs
    .readdirSync(path.join(process.cwd(), "src/content/blog"))
    .filter((file) => file.endsWith(".mdx"));

  const posts = files
    .map((file) => {
      const content = fs.readFileSync(
        path.join(process.cwd(), "src/content/blog", file),
        "utf-8"
      );
      const { data } = matter(content);
      return {
        title: data.title,
        slug: file.replace(".mdx", ""),
        tags: data.tags || [],
        description: data.description || "",
        date: data.date,
        author: data.author,
      };
    })
    // Filter out current post and find related posts by tags
    .filter((post) => {
      if (post.slug === currentSlug) return false;
      if (!tags || tags.length === 0) return true;
      return post.tags.some((tag: string) => tags.includes(tag));
    })
    .slice(0, 3); // Limit to 3 related posts

  if (posts.length === 0) return null;

  return (
    <section className="mt-8 border-t pt-8" aria-label="Related articles">
      <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
      <div className="grid gap-6 md:grid-cols-3" role="list">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group relative flex flex-col"
            itemScope
            itemType="http://schema.org/BlogPosting"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="block p-4 border rounded-lg hover:border-gray-400 transition-colors"
              title={`Read more about ${post.title}`}
            >
              <meta itemProp="url" content={`/blog/${post.slug}`} />
              <meta itemProp="headline" content={post.title} />
              {post.date && (
                <meta
                  itemProp="datePublished"
                  content={new Date(post.date).toISOString()}
                />
              )}
              {post.author && (
                <meta itemProp="author" content={post.author.name} />
              )}
              <h3
                className="font-semibold mb-2 group-hover:text-blue-600 transition-colors"
                itemProp="name"
              >
                {post.title}
              </h3>
              {post.date && (
                <time
                  dateTime={new Date(post.date).toISOString()}
                  className="text-sm text-gray-500 mb-2 block"
                >
                  {format(new Date(post.date), "MMMM d, yyyy")}
                </time>
              )}
              <p className="text-sm text-gray-600" itemProp="description">
                {post.description}
              </p>
              {post.tags && post.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
