import { CustomizationCardProps } from "@/types";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";

const GridCard = ({ chartCustomization, setChartCustomization }: CustomizationCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Text variant="sm" className="font-bold">
          Grid
        </Text>
      </CardHeader>
      <CardContent className="space-y-2">
        <Accordion type="single" collapsible>
          <AccordionItem value="grid-1">
            <AccordionTrigger>
              <Text variant="label">Horizontal</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3">
              <div className="flex justify-between items-center">
                <Text variant="xs">Show</Text>
                <Switch
                  size="sm"
                  checked={chartCustomization.grid.horizontal.show}
                  onCheckedChange={() =>
                    setChartCustomization({
                      ...chartCustomization,
                      grid: {
                        ...chartCustomization.grid,
                        horizontal: {
                          ...chartCustomization.grid.horizontal,
                          show: !chartCustomization.grid.horizontal.show,
                        },
                      },
                    })
                  }
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="grid-1">
            <AccordionTrigger>
              <Text variant="label">Vertical</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3">
              <div className="flex justify-between items-center">
                <Text variant="xs">Show</Text>
                <Switch
                  size="sm"
                  checked={chartCustomization.grid.vertical.show}
                  onCheckedChange={() =>
                    setChartCustomization({
                      ...chartCustomization,
                      grid: {
                        ...chartCustomization.grid,
                        vertical: {
                          ...chartCustomization.grid.vertical,
                          show: !chartCustomization.grid.vertical.show,
                        },
                      },
                    })
                  }
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default GridCard;
