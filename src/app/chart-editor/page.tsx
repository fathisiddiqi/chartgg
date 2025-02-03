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
          <div className="md:hidden flex flex-col items-center justify-center h-full p-4 text-center space-y-4">
            <Text variant="xl" className="font-bold">
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
            </Link>
          </div>
        </main>
      </QueryClientProvider>
    </>
  );
}

const Navbar = () => {
  return (
    <header className="flex h-12 w-full shrink-0 items-center px-4 border-b border-muted">
      <Link
        href="/"
        className="mr-6 hidden lg:flex items-center"
        prefetch={false}
      >
        <div className="flex items-center">
          <Image src="/logo.svg" alt="logo" width={28} height={28} />
          <span className="ml-2 text-xl font-bold">Chartgg</span>
          <span className="ml-2 inline-flex items-center rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary ring-1 ring-inset ring-primary/20">
            Beta
          </span>
        </div>
      </Link>
      <div className="ml-auto flex gap-2 justify-end">
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
      <PopoverTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-3">
        <ShareIcon className="h-4 w-4" />
        Share
      </PopoverTrigger>
      <PopoverContent className="mr-4 space-y-4">
        <div className="space-y-2">
          <Text variant="xs">File Type</Text>
          <Select
            onValueChange={(value) =>
              setFileType(value as "jpeg" | "png" | "svg" | "pdf")
            }
            value={fileType}
          >
            <SelectTrigger className="mr-2">
              <SelectValue placeholder="Download Format">
                <div className="flex items-center gap-2">
                  {fileType === "pdf" ? (
                    <FileIcon className="h-4 w-4" />
                  ) : (
                    <ImageIcon className="h-4 w-4" />
                  )}
                  <Text className="text-sm">{fileType.toUpperCase()}</Text>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jpeg" className="cursor-pointer">
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-4 w-4" />
                  <Text className="text-sm">JPEG</Text>
                </div>
              </SelectItem>
              <SelectItem value="png" className="cursor-pointer">
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-4 w-4" />
                  <Text className="text-sm">PNG</Text>
                </div>
              </SelectItem>
              <SelectItem value="svg" className="cursor-pointer">
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-4 w-4" />
                  <Text className="text-sm">SVG</Text>
                </div>
              </SelectItem>
              {/* <SelectItem value="pdf" className="cursor-pointer">
                <div className="flex items-center gap-2">
                  <FileIcon className="h-4 w-4" />
                  <Text className="text-sm">PDF</Text>
                </div>
              </SelectItem> */}
            </SelectContent>
          </Select>
        </div>
        {/* <div className="space-y-2">
          <Text variant="xs">Quality</Text>
          <div className="flex space-x-2">
            <Slider
              defaultValue={[quality]}
              min={1}
              max={3}
              step={1}
              className="flex-1"
              onValueChange={(value) => {
                setQuality(value[0]);
              }}
            />
            <Input
              variant="sm"
              type="number"
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              max={3}
              className="flex-1 bg-white text-gray-900 border-gray-300 max-w-[2.25rem] p-1 text-center"
            />
          </div>
        </div> */}
        <Button
          variant="default"
          size="sm"
          className="w-full"
          onClick={handleDownload}
        >
          Download
        </Button>
      </PopoverContent>
    </Popover>
  );
};
