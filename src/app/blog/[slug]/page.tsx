import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import Navbar from "@/components/marketing/navbar";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontMatter } = matter(fileContent);

  const previousImages = (await parent).openGraph?.images || [];
  const canonicalUrl = `https://chartgg.com/blog/${slug}`;

  return {
    title: frontMatter.title,
    description: frontMatter.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.description,
      type: "article",
      publishedTime: frontMatter.date,
      url: canonicalUrl,
      images: frontMatter.image
        ? [frontMatter.image, ...previousImages]
        : previousImages,
    },
    twitter: {
      card: "summary_large_image",
      title: frontMatter.title,
      description: frontMatter.description,
      images: frontMatter.image ? [frontMatter.image] : [],
    },
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "src/content/blog"));

  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontMatter, content } = matter(fileContent);

  const { content: mdxContent } = await compileMDX({
    source: content,
    options: { 
      parseFrontmatter: true,
      scope: { frontMatter },
    },
    components: {
      Author: ({ name, role, avatar }) => (
        <div className="flex items-center gap-4 mb-8 not-prose">
          <Image
            src={avatar}
            alt={name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <div className="font-medium">{name}</div>
            <div className="text-sm text-gray-500">{role}</div>
          </div>
        </div>
      ),
    },
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <article className="max-w-4xl mx-auto px-4 py-12 prose prose-lg">
          <header className="mb-8 not-prose">
            {frontMatter.image && (
              <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image
                  src={frontMatter.image}
                  alt={frontMatter.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            <h1 className="text-4xl font-bold mb-2">{frontMatter.title}</h1>
            <time className="text-gray-500 block mb-4">
              {new Date(frontMatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </header>
          {mdxContent}
        </article>
      </main>
    </>
  );
}
