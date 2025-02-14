import Image from "next/image";
import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
  title: string;
  date: string;
  image?: string;
}

export function BlogLayout({ children, title, date, image }: BlogLayoutProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 prose prose-lg">
      <header className="mb-8 not-prose">
        {image && (
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <time className="text-gray-500 block mb-4">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>
      {children}
    </article>
  );
}
