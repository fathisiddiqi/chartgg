import { CustomizationCardProps } from "@/types";
import TextAlign from "@/components/common/text-align";
import { Input } from "@/components/custom-ui/input";
import { Text } from "@/components/ui/text";
import { Switch } from "@/components/custom-ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/custom-ui/select";
import ColorSelector from "@/components/common/color-selector";
import { titleCase } from "@/lib/utils";
import { ChartTextFontFamilies, ChartTextFontFamily } from "@/store/chart";
import FontStyle from "@/components/common/font-style";

const TextCard = ({
  chartCustomization,
  setChartCustomization,
}: CustomizationCardProps) => {
  return (
    <div className="my-3">
      <Text variant="sm" className="font-bold">
        Text
      </Text>
      {/* Title */}
      <div className="space-y-2 mb-3">
        <div className="flex justify-between items-center">
          <Text variant="label" className="mt-3">
            Title
          </Text>
          <Switch
            size="sm"
            checked={chartCustomization.text.title.show}
            onCheckedChange={() =>
              setChartCustomization({
                ...chartCustomization,
                text: {
                  ...chartCustomization.text,
                  title: {
                    ...chartCustomization.text.title,
                    show: !chartCustomization.text.title.show,
                  },
                },
              })
            }
          />
        </div>
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
          disabled={!chartCustomization.text.title.show}
        />
      </div>

      {/* Subtitle */}
      <div className="space-y-2 mb-3">
        <div className="flex justify-between">
          <Text variant="label">Subtitle</Text>
          <Switch
            size="sm"
            checked={chartCustomization.text.subtitle.show}
            onCheckedChange={() =>
              setChartCustomization({
                ...chartCustomization,
                text: {
                  ...chartCustomization.text,
                  subtitle: {
                    ...chartCustomization.text.subtitle,
                    show: !chartCustomization.text.subtitle.show,
                  },
                },
              })
            }
          />
        </div>
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
          disabled={!chartCustomization.text.subtitle.show}
        />
      </div>

      {/* Footer Title */}
      <div className="space-y-2 mb-3">
        <div className="flex justify-between">
          <Text variant="label">Footer</Text>
          <Switch
            size="sm"
            checked={chartCustomization.text.footerTitle.show}
            onCheckedChange={() =>
              setChartCustomization({
                ...chartCustomization,
                text: {
                  ...chartCustomization.text,
                  footerTitle: {
                    ...chartCustomization.text.footerTitle,
                    show: !chartCustomization.text.footerTitle.show,
                  },
                },
              })
            }
          />
        </div>
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
          disabled={!chartCustomization.text.footerTitle.show}
        />
      </div>

      {/* Footer Subtitle */}
      <div className="space-y-2 mb-3">
        <div className="flex justify-between">
          <Text variant="label">Footer Subtitle</Text>
          <Switch
            size="sm"
            checked={chartCustomization.text.footerSubtitle.show}
            onCheckedChange={() =>
              setChartCustomization({
                ...chartCustomization,
                text: {
                  ...chartCustomization.text,
                  footerSubtitle: {
                    ...chartCustomization.text.footerSubtitle,
                    show: !chartCustomization.text.footerSubtitle.show,
                  },
                },
              })
            }
          />
        </div>
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
          disabled={!chartCustomization.text.footerSubtitle.show}
        />
      </div>

      <Separator className="my-4" />

      <Text variant="sm" className="font-bold">
        Text Style
      </Text>

      <div className="space-y-2">
        <div className="flex flex-row justify-between items-center space-x-2 mt-3">
          <div className="w-3/6 space-y-2">
            <Text variant="label">Text Color</Text>
            <ColorSelector
              selectedColor={chartCustomization.text.title.color}
              setSelectedColor={(color: string) => {
                setChartCustomization({
                  ...chartCustomization,
                  text: {
                    ...chartCustomization.text,
                    title: {
                      ...chartCustomization.text.title,
                      color: color,
                    },
                    subtitle: {
                      ...chartCustomization.text.subtitle,
                      color: color,
                    },
                    footerTitle: {
                      ...chartCustomization.text.footerTitle,
                      color: color,
                    },
                    footerSubtitle: {
                      ...chartCustomization.text.footerSubtitle,
                      color: color,
                    },
                  },
                });
              }}
            />
          </div>
          <div className="w-3/6 space-y-2">
            <Text variant="label">Text Align</Text>
            <TextAlign
              textAlign={chartCustomization.text.title.textAlign}
              setTextAlign={(textAlign: "left" | "center" | "right") => {
                setChartCustomization({
                  ...chartCustomization,
                  text: {
                    ...chartCustomization.text,
                    title: {
                      ...chartCustomization.text.title,
                      textAlign: textAlign,
                    },
                    subtitle: {
                      ...chartCustomization.text.subtitle,
                      textAlign: textAlign,
                    },
                    footerTitle: {
                      ...chartCustomization.text.footerTitle,
                      textAlign: textAlign,
                    },
                    footerSubtitle: {
                      ...chartCustomization.text.footerSubtitle,
                      textAlign: textAlign,
                    },
                  },
                });
              }}
            />
          </div>
        </div>

        <div className="flex justify-between items-center space-x-2">
          <div className="w-3/6 space-y-2">
            <Text variant="label">Font Family</Text>
            <Select
              value={chartCustomization.text.title.fontFamily}
              onValueChange={(value) =>
                setChartCustomization({
                  ...chartCustomization,
                  text: {
                    ...chartCustomization.text,
                    title: {
                      ...chartCustomization.text.title,
                      fontFamily: value as ChartTextFontFamily,
                    },
                    subtitle: {
                      ...chartCustomization.text.subtitle,
                      fontFamily: value as ChartTextFontFamily,
                    },
                    footerTitle: {
                      ...chartCustomization.text.footerTitle,
                      fontFamily: value as ChartTextFontFamily,
                    },
                    footerSubtitle: {
                      ...chartCustomization.text.footerSubtitle,
                      fontFamily: value as ChartTextFontFamily,
                    },
                  },
                })
              }
            >
              <SelectTrigger variant="sm">
                <Text variant="xs">
                  {titleCase(chartCustomization.text.title.fontFamily)}
                </Text>
              </SelectTrigger>
              <SelectContent>
                {ChartTextFontFamilies.map((fontFamily, index) => (
                  <SelectItem
                    key={index}
                    value={fontFamily}
                    onClick={() =>
                      setChartCustomization({
                        ...chartCustomization,
                        text: {
                          ...chartCustomization.text,
                          title: {
                            ...chartCustomization.text.title,
                            fontFamily: fontFamily,
                          },
                          subtitle: {
                            ...chartCustomization.text.subtitle,
                            fontFamily: fontFamily,
                          },
                          footerTitle: {
                            ...chartCustomization.text.footerTitle,
                            fontFamily: fontFamily,
                          },
                          footerSubtitle: {
                            ...chartCustomization.text.footerSubtitle,
                            fontFamily: fontFamily,
                          },
                        },
                      })
                    }
                  >
                    <Text variant="xs">{titleCase(fontFamily)}</Text>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-3/6 space-y-2">
            <Text variant="label">Font Style</Text>
            <FontStyle
              fontStyle={chartCustomization.text.title.fontStyle}
              setFontStyle={(style) =>
                setChartCustomization({
                  ...chartCustomization,
                  text: {
                    ...chartCustomization.text,
                    title: {
                      ...chartCustomization.text.title,
                      fontStyle: style,
                    },
                    subtitle: {
                      ...chartCustomization.text.subtitle,
                      fontStyle: style,
                    },
                    footerTitle: {
                      ...chartCustomization.text.footerTitle,
                      fontStyle: style,
                    },
                    footerSubtitle: {
                      ...chartCustomization.text.footerSubtitle,
                      fontStyle: style,
                    },
                  },
                })
              }
              fontWeight={chartCustomization.text.title.fontWeight}
              setFontWeight={(weight) =>
                setChartCustomization({
                  ...chartCustomization,
                  text: {
                    ...chartCustomization.text,
                    title: {
                      ...chartCustomization.text.title,
                      fontWeight: weight,
                    },
                    subtitle: {
                      ...chartCustomization.text.subtitle,
                      fontWeight: weight,
                    },
                    footerTitle: {
                      ...chartCustomization.text.footerTitle,
                      fontWeight: weight,
                    },
                    footerSubtitle: {
                      ...chartCustomization.text.footerSubtitle,
                      fontWeight: weight,
                    },
                  },
                })
              }
              textDecoration={chartCustomization.text.title.textDecoration}
              setTextDecoration={(decoration) =>
                setChartCustomization({
                  ...chartCustomization,
                  text: {
                    ...chartCustomization.text,
                    title: {
                      ...chartCustomization.text.title,
                      textDecoration: decoration,
                    },
                    subtitle: {
                      ...chartCustomization.text.subtitle,
                      textDecoration: decoration,
                    },
                    footerTitle: {
                      ...chartCustomization.text.footerTitle,
                      textDecoration: decoration,
                    },
                    footerSubtitle: {
                      ...chartCustomization.text.footerSubtitle,
                      textDecoration: decoration,
                    },
                  },
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
