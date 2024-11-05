import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/text";
import Data from "./data";
import Customize from "./customize";
import { Separator } from "@/components/ui/separator";
import { Camera, Paintbrush, Table } from "lucide-react";
import Screenshot from "./screenshot";

const MenuEditor = () => {
  return (
    <div className="mb-4 mx-4 mt-3">
      <Tabs defaultValue="data" className="w-full max-w-full">
        <TabsList className="grid w-full grid-cols-3 rounded-md bg-muted p-1">
          <TabsTrigger
            value="data"
            className="data-[state=active]:bg-background data-[state=active]:shadow-sm flex items-center justify-center"
          >
            <Table className="w-4 h-4 mr-2" />
            Data
          </TabsTrigger>
          <TabsTrigger
            value="customization"
            className="data-[state=active]:bg-background data-[state=active]:shadow-sm flex items-center justify-center"
          >
            <Paintbrush className="w-4 h-4 mr-2" />
            Customization
          </TabsTrigger>
          <TabsTrigger
            value="screenshot"
            className="data-[state=active]:bg-background data-[state=active]:shadow-sm flex items-center justify-center"
          >
            <Camera className="w-4 h-4 mr-2" />
            Screenshot
          </TabsTrigger>
        </TabsList>
        <Separator className="my-2" />
        <TabsContent value="data">
          <Data />
        </TabsContent>
        <TabsContent value="customization">
          <Customize />
        </TabsContent>
        <TabsContent value="screenshot">
          <Screenshot />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MenuEditor;
