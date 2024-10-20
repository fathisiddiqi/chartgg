import { useState } from "react"; // Add this import
import ChartPreview from "./chart-preview/chart-preview";
import MenuEditor from "./menu-editor/menu-editor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const MainEditor = () => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={75} minSize={50} maxSize={75}>
        <ChartPreview />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25} minSize={15} maxSize={50}>
        <MenuEditor />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default MainEditor;
