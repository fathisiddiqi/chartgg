import Image from "next/image";
import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
  title: string;
  date: string;
  image?: string;
  imageSource?: string;
  imageLink?: string;
}

export function BlogLayout({
  children,
  title,
  date,
  image,
  imageSource,
  imageLink,
}: BlogLayoutProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 prose prose-lg">
      <header className="mb-8 not-prose">
        {image && (
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg mb-8">
            {imageLink ? (
              <a
                href={imageLink}
                // target="_blank"
                // rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-2">
                  <p className="text-sm text-white text-center hover:underline">
                    Image by {imageSource}
                  </p>
                </div>
              </a>
            ) : (
              <>
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-2">
                  <p className="text-sm text-white text-center">
                    Image by {imageSource}
                  </p>
                </div>
              </>
            )}
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
