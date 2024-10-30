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
      <ResizablePanel defaultSize={55} minSize={50} maxSize={75}>
        <ChartPreview />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
        <MenuEditor />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default MainEditor;
