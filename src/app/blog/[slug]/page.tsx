import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { BlogLayout } from "@/components/marketing/blog/layout";
import { Author } from "@/components/marketing/blog/author";
import { BlogPostSchema } from "@/components/marketing/blog/schema";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { Metadata } from "next";

// Components that can be used in MDX files
const components = {
  Author: (props: any) => <Author {...props} />,
  img: (props: any) => (
    <Image
      {...props}
      alt={props.alt || ""}
      width={800}
      height={400}
      className="rounded-lg"
    />
  ),
};

export function generateStaticParams() {
  const files = fs
    .readdirSync(path.join(process.cwd(), "src/content/blog"))
    .filter((file) => file.endsWith(".mdx"));

  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontMatter } = matter(fileContent);
  const canonicalUrl = `https://chartgg.com/blog/${slug}`;

  const author = {
    name: frontMatter.author?.name || "ChartGG Team",
    url: "https://chartgg.com",
  };

  const ogImage = frontMatter.image
    ? `https://chartgg.com${frontMatter.image}`
    : "https://chartgg.com/og-chartgg.png";

  return {
    title: frontMatter.title,
    description: frontMatter.description,
    authors: [author],
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.description,
      type: "article",
      publishedTime: frontMatter.date,
      authors: [author.name],
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: frontMatter.title,
        },
      ],
      siteName: "ChartGG",
    },
    twitter: {
      card: "summary_large_image",
      title: frontMatter.title,
      description: frontMatter.description,
      images: [ogImage],
      creator: "@chartgg",
      site: "@chartgg",
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    category: "Blog",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontMatter, content } = matter(fileContent);
  const canonicalUrl = `https://chartgg.com/blog/${slug}`;

  const author = {
    name: frontMatter.author?.name || "ChartGG Team",
    url: "https://chartgg.com",
  };

  return (
    <>
      <BlogPostSchema
        title={frontMatter.title}
        description={frontMatter.description}
        date={frontMatter.date}
        author={author}
        image={frontMatter.image}
        url={canonicalUrl}
      />
      <BlogLayout
        title={frontMatter.title}
        date={frontMatter.date}
        image={frontMatter.image}
      >
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote
            source={content}
            components={components}
            options={{
              mdxOptions: {
                remarkPlugins: [],
                rehypePlugins: [],
              },
            }}
          />
        </article>
      </BlogLayout>
    </>
  );
}
