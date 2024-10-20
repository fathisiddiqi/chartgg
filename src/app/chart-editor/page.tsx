"use client";

import Navbar from "@/components/common/navbar";
import MainEditor from "./main-editor/main-editor";
export default function ChartEditor() {
  return (
    <main className="flex h-screen flex-col w-full">
      <Navbar />
      <MainEditor />
    </main>
  );
}
