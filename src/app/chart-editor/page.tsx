"use client";

import Link from "next/link";
import MainEditor from "./main-editor/main-editor";
import Image from "next/image";
import Editor from "./editor/editor";
import ChartPreview from "./chart-preview/chart-preview";

export default function ChartEditor() {
  return (
    <main className="flex h-screen flex-col w-full">
      <Navbar />
      <div className="flex flex-row gap-4 p-4">
        <Editor />
        <div className="w-full">
          <ChartPreview />
        </div>
      </div>
    </main>
  );
}

const Navbar = () => {
  return (
    <header className="flex h-12 w-full shrink-0 items-center px-12 border-b border-muted">
      <Link
        href="/"
        className="mr-6 hidden lg:flex items-center"
        prefetch={false}
      >
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <span className="ml-2 text-xl font-bold">ChartSS</span>
      </Link>
      {/* <div className="ml-auto flex gap-2 justify-end">
        <Button size="mini-sm" variant="outline">
          Sign in
        </Button>
        <Button size="mini-sm">Sign Up</Button>
      </div> */}
    </header>
  );
};
