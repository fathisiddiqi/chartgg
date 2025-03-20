import Navbar from "@/components/marketing/navbar";
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar pathname="/blog" />
      <main className="min-h-screen pt-16">{children}</main>
    </>
  );
}
