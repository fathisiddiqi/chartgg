"use client";

import Image from "next/image";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Editor from "./editor/editor";
import ChartPreview from "./chart-preview/chart-preview";
import TallyFormPopup from "@/components/common/tally-form";
import Link from "next/link";
import { Button } from "@/components/custom-ui/button";
import { FileIcon, ImageIcon, ShareIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/custom-ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Text } from "@/components/ui/text";
import { ChartDownloadFileType, useChartStore } from "@/store/chart";
import { useDownloadChart } from "@/service/chart";
import Head from "next/head";
import MobileEditor from "./editor/mobile-editor";
import { ChartggText } from "@/components/common/chartgg-text";

export default function ChartEditor() {
  return (
    <>
      <Head>
        <title>Chart Editor - Chartgg</title>
        <meta
          name="description"
          content="Create and customize beautiful charts with our intuitive chart editor. Design data visualizations effortlessly with real-time preview."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="chart editor, data visualization editor, chart customization, interactive chart builder, real-time chart preview, data visualization tool, chart design interface, chart maker, graph editor, chart styling, data presentation tool"
        />

        <link rel="canonical" href="https://chartgg.com/chart-editor" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://chartgg.com/chart-editor" />
        <meta property="og:site_name" content="Chartgg" />
        <meta property="og:title" content="Chart Editor - Chartgg" />
        <meta
          property="og:description"
          content="Create and customize beautiful charts with our intuitive chart editor. Design data visualizations effortlessly with real-time preview."
        />
        <meta property="og:image" content="/og-chartgg.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Chartgg Chart Editor" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chartggapp" />
        <meta name="twitter:creator" content="@chartggapp" />
      </Head>
      <QueryClientProvider client={new QueryClient()}>
        <main className="flex h-screen flex-col w-full mx-auto">
          {/* Desktop Editor */}
          <div className="hidden md:block">
            <Navbar />
            <div className="flex flex-row gap-4 p-4">
              <Editor />
              <div className="w-full">
                <ChartPreview />
              </div>
              <TallyFormPopup formId="mDxX4E" />
            </div>
          </div>
          {/* Mobile Message */}
          <div className="md:hidden">
            <Navbar />
            <ChartPreview />
            <MobileEditor />
            {/* <Text variant="xl" className="font-bold">
                Desktop Only
              </Text>
              <Text variant="base">
                Sorry, the chart editor is only available on desktop devices.
                Please visit us on a larger screen.
              </Text>
              <Link href="/">
                <Button variant="outline" size="lg">
                  Back to Home
                </Button>
              </Link> */}
          </div>
        </main>
      </QueryClientProvider>
    </>
  );
}

const Navbar = () => {
  return (
    <header className="flex h-14 w-full shrink-0 items-center px-2 md:px-4 border-b border-muted bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 backdrop-blur-sm">
      <Link
        href="/"
        className="mr-4 md:mr-6 flex items-center"
        prefetch={false}
      >
        <div className="flex items-center">
          <ChartggText size="md" color="white" />
        </div>
      </Link>
      <div className="ml-auto flex gap-1.5 md:gap-2 justify-end">
        <Link
          href="https://github.com/fathisiddiqi/chartss"
          target="_blank"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-1.5 md:gap-2 bg-white text-gray-800 hover:bg-gray-100 h-7 md:h-8 px-2 md:px-3"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 md:h-4 md:w-4"
            fill="currentColor"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </Link>
        <FileDownloadPopover />
      </div>
    </header>
  );
};

const FileDownloadPopover = () => {
  const [fileType, setFileType] = useState<ChartDownloadFileType>("jpeg");
  const [quality, setQuality] = useState<number>(1);
  const { chartDownload } = useChartStore();
  const downloadChart = useDownloadChart();

  const handleDownload = () => {
    downloadChart.mutate(
      { type: fileType, quality, chartRef: chartDownload.chartRef },
      {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <Popover>
      <PopoverTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-1.5 md:gap-2 bg-white text-gray-800 hover:bg-gray-100 h-7 md:h-8 px-2 md:px-3">
        <ShareIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
        Share
      </PopoverTrigger>
      <PopoverContent className="mr-2 md:mr-4 space-y-3 md:space-y-4 p-3 md:p-4">
        <div className="space-y-1.5 md:space-y-2">
          <Text variant="xs">File Type</Text>
          <Select
            onValueChange={(value) =>
              setFileType(value as "jpeg" | "png" | "svg" | "pdf")
            }
            value={fileType}
          >
            <SelectTrigger className="h-8 md:h-9">
              <SelectValue placeholder="Download Format">
                <div className="flex items-center gap-1.5 md:gap-2">
                  {fileType === "pdf" ? (
                    <FileIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  ) : (
                    <ImageIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  )}
                  <Text className="text-xs md:text-sm">
                    {fileType.toUpperCase()}
                  </Text>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jpeg" className="cursor-pointer">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <ImageIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  <Text className="text-xs md:text-sm">JPEG</Text>
                </div>
              </SelectItem>
              <SelectItem value="png" className="cursor-pointer">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <ImageIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  <Text className="text-xs md:text-sm">PNG</Text>
                </div>
              </SelectItem>
              <SelectItem value="svg" className="cursor-pointer">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <ImageIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  <Text className="text-xs md:text-sm">SVG</Text>
                </div>
              </SelectItem>
              {/* <SelectItem value="pdf" className="cursor-pointer">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <FileIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  <Text className="text-xs md:text-sm">PDF</Text>
                </div>
              </SelectItem> */}
            </SelectContent>
          </Select>
        </div>
        <Button
          variant="default"
          size="sm"
          className="w-full h-8 md:h-9 text-xs md:text-sm"
          onClick={handleDownload}
        >
          Download
        </Button>
      </PopoverContent>
    </Popover>
  );
};
