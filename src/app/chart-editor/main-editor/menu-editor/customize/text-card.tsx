import { CustomizationCardProps } from "@/types";
import TextAlign from "@/components/common/text-align";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/custom-ui/input";
import { Text } from "@/components/ui/text";
import { ColorInput } from "@/components/custom-ui/color-input";

const TextCard = ({ chartCustomization, setChartCustomization }: CustomizationCardProps) => {
  return (
    <Card>
      <CardContent>
        <Text variant="sm" className="mt-3 font-bold">
          Text
        </Text>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <Text variant="label">Title</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3">
              <Input
                variant="sm"
                placeholder="Input title here"
                value={chartCustomization.text.title.text}
                onChange={(e) =>
                  setChartCustomization({
                    ...chartCustomization,
                    text: {
                      ...chartCustomization.text,
                      title: {
                        ...chartCustomization.text.title,
                        text: e.target.value,
                      },
                    },
                  })
                }
                className="mb-3"
              />

              <div className="flex items-center space-x-4">
                <div className="flex-1 space-y-2">
                  <Text variant="label">Text Color</Text>
                  <div className="flex items-center space-x-2">
                    <ColorInput
                      variant="sm"
                      value={chartCustomization.text.title.color}
                      onChange={(e) =>
                        setChartCustomization({
                          ...chartCustomization,
                          text: {
                            ...chartCustomization.text,
                            title: {
                              ...chartCustomization.text.title,
                              color: e.target.value,
                            },
                          },
                        })
                      }
                    />
                    <Input
                      variant="sm"
                      type="text"
                      value={chartCustomization.text.title.color}
                      onChange={(e) =>
                        setChartCustomization({
                          ...chartCustomization,
                          text: {
                            ...chartCustomization.text,
                            title: {
                              ...chartCustomization.text.title,
                              color: e.target.value,
                            },
                          },
                        })
                      }
                      className="flex-1 bg-white text-gray-900 border-gray-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Text variant="label">Text Align</Text>
                  <TextAlign
                    textAlign={chartCustomization.text.title.align}
                    setTextAlign={(textAlign: "left" | "center" | "right") => {
                      setChartCustomization({
                        ...chartCustomization,
                        text: {
                          ...chartCustomization.text,
                          title: {
                            ...chartCustomization.text.title,
                            align: textAlign,
                          },
                        },
                      });
                    }}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <Text variant="label">Subtitle</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3">
              <Input
                variant="sm"
                placeholder="Input subtitle here"
                value={chartCustomization.text.subtitle.text}
                onChange={(e) =>
                  setChartCustomization({
                    ...chartCustomization,
                    text: {
                      ...chartCustomization.text,
                      subtitle: {
                        ...chartCustomization.text.subtitle,
                        text: e.target.value,
                      },
                    },
                  })
                }
                className="mb-3"
              />
              <div className="flex items-center space-x-4">
                <div className="flex-1 space-y-2">
                  <Text variant="label">Text Color</Text>
                  <div className="flex items-center space-x-2">
                    <ColorInput
                      variant="sm"
                      value={chartCustomization.text.subtitle.color}
                      onChange={(e) =>
                        setChartCustomization({
                          ...chartCustomization,
                          text: {
                            ...chartCustomization.text,
                            subtitle: {
                              ...chartCustomization.text.subtitle,
                              color: e.target.value,
                            },
                          },
                        })
                      }
                    />
                    <Input
                      variant="sm"
                      type="text"
                      value={chartCustomization.text.subtitle.color}
                      onChange={(e) =>
                        setChartCustomization({
                          ...chartCustomization,
                          text: {
                            ...chartCustomization.text,
                            subtitle: {
                              ...chartCustomization.text.subtitle,
                              color: e.target.value,
                            },
                          },
                        })
                      }
                      className="flex-1 bg-white text-gray-900 border-gray-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Text variant="label">Text Align</Text>
                  <TextAlign
                    textAlign={chartCustomization.text.subtitle.align}
                    setTextAlign={(textAlign: "left" | "center" | "right") => {
                      setChartCustomization({
                        ...chartCustomization,
                        text: {
                          ...chartCustomization.text,
                          subtitle: {
                            ...chartCustomization.text.subtitle,
                            align: textAlign,
                          },
                        },
                      });
                    }}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <Text variant="label">Footer</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3">
              <Input
                variant="sm"
                placeholder="Input footer here"
                value={chartCustomization.text.footerTitle.text}
                onChange={(e) =>
                  setChartCustomization({
                    ...chartCustomization,
                    text: {
                      ...chartCustomization.text,
                      footerTitle: {
                        ...chartCustomization.text.footerTitle,
                        text: e.target.value,
                      },
                    },
                  })
                }
                className="mb-3"
              />
              <div className="flex items-center space-x-4">
                <div className="flex-1 space-y-2">
                  <Text variant="label">Text Color</Text>
                  <div className="flex items-center space-x-2">
                    <ColorInput
                      variant="sm"
                      value={chartCustomization.text.footerTitle.color}
                      onChange={(e) =>
                        setChartCustomization({
                          ...chartCustomization,
                          text: {
                            ...chartCustomization.text,
                            footerTitle: {
                              ...chartCustomization.text.footerTitle,
                            },
                          },
                        })
                      }
                    />
                    <Input
                      variant="sm"
                      type="text"
                      value={chartCustomization.text.footerTitle.color}
                      onChange={(e) =>
                        setChartCustomization({
                          ...chartCustomization,
                          text: {
                            ...chartCustomization.text,
                            footerTitle: {
                              ...chartCustomization.text.footerTitle,
                              color: e.target.value,
                            },
                          },
                        })
                      }
                      className="flex-1 bg-white text-gray-900 border-gray-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Text variant="label">Text Align</Text>
                  <TextAlign
                    textAlign={chartCustomization.text.footerTitle.align}
                    setTextAlign={(textAlign: "left" | "center" | "right") => {
                      setChartCustomization({
                        ...chartCustomization,
                        text: {
                          ...chartCustomization.text,
                          footerTitle: {
                            ...chartCustomization.text.footerTitle,
                            align: textAlign,
                          },
                        },
                      });
                    }}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <Text variant="label">Footer Subtitle</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3">
              <Input
                variant="sm"
                placeholder="Input description here"
                value={chartCustomization.text.footerSubtitle.text}
                onChange={(e) =>
                  setChartCustomization({
                    ...chartCustomization,
                    text: {
                      ...chartCustomization.text,
                      footerSubtitle: {
                        ...chartCustomization.text.footerSubtitle,
                        text: e.target.value,
                      },
                    },
                  })
                }
                className="mb-3"
              />
              <div className="flex items-center space-x-4">
                <div className="flex-1 space-y-2">
                  <Text variant="label">Text Color</Text>
                  <div className="flex items-center space-x-2">
                    <ColorInput
                      variant="sm"
                      value={chartCustomization.text.footerSubtitle.color}
                      onChange={(e) =>
                        setChartCustomization({
                          ...chartCustomization,
                          text: {
                            ...chartCustomization.text,
                            footerSubtitle: {
                              ...chartCustomization.text.footerSubtitle,
                            },
                          },
                        })
                      }
                    />
                    <Input
                      variant="sm"
                      type="text"
                      value={chartCustomization.text.footerSubtitle.color}
                      onChange={(e) =>
                        setChartCustomization({
                          ...chartCustomization,
                          text: {
                            ...chartCustomization.text,
                            footerSubtitle: {
                              ...chartCustomization.text.footerSubtitle,
                              color: e.target.value,
                            },
                          },
                        })
                      }
                      className="flex-1 bg-white text-gray-900 border-gray-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Text variant="label">Text Align</Text>
                  <TextAlign
                    textAlign={chartCustomization.text.footerSubtitle.align}
                    setTextAlign={(textAlign: "left" | "center" | "right") => {
                      setChartCustomization({
                        ...chartCustomization,
                        text: {
                          ...chartCustomization.text,
                          footerSubtitle: {
                            ...chartCustomization.text.footerSubtitle,
                            align: textAlign,
                          },
                        },
                      });
                    }}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default TextCard;
