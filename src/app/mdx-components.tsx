import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { Author } from "@/components/marketing/blog/author";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => (
      <Image
        {...props}
        alt={props.alt || ""}
        className="rounded-lg"
        loading="lazy"
      />
    ),
    Author,
    ...components,
  };
}
