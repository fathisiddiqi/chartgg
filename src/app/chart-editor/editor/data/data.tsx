"use client";

import { useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Trash2,
  PlusCircle,
  FileInput,
  ChevronDown,
  Pencil,
  Check,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChartData, useChartStore } from "@/store/chart";
import { Text } from "@/components/ui/text";
import { ScrollArea, ScrollBar } from "@/components/custom-ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Data() {
  const { chartData, setChartData } = useChartStore((state) => state);
  const [openTableModal, setOpenTableModal] = useState<boolean>(false);

  const handleTryData = () => {
    setChartData([
      {
        id: 1,
        label: "January",
        Shoes: "1000",
        Clothing: "2000",
        Accessories: "500",
        Hat: "150",
      },
      {
        id: 2,
        label: "February",
        Shoes: "1200",
        Clothing: "2200",
        Accessories: "600",
        Hat: "160",
      },
      {
        id: 3,
        label: "March",
        Shoes: "1400",
        Clothing: "2400",
        Accessories: "700",
        Hat: "170",
      },
      {
        id: 4,
        label: "April",
        Shoes: "1600",
        Clothing: "2600",
        Accessories: "800",
        Hat: "180",
      },
      {
        id: 5,
        label: "May",
        Shoes: "1800",
        Clothing: "2800",
        Accessories: "900",
        Hat: "190",
      },
    ]);
  };

  return (
    <ScrollArea className="h-[calc(100vh-130px)] w-full">
      <div className="space-y-4 w-full">
        <Text variant="sm" className="font-bold">
          Data
        </Text>
        <div>
          {chartData.length > 0 ? (
            <TablePreview
              chartData={chartData.slice(0, 5)}
              setOpenTableModal={setOpenTableModal}
            />
          ) : (
            <div className="w-full mt-24 flex flex-col items-center justify-center align-center gap-4">
              <Button
                variant="default"
                className="w-3/4"
                onClick={() => setOpenTableModal(true)}
              >
                Create Data
              </Button>
              <Text variant="sm">
                or{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={handleTryData}
                >
                  try an example data
                </span>
              </Text>
            </div>
          )}
        </div>

        <TableModal open={openTableModal} setIsOpen={setOpenTableModal} />
      </div>
    </ScrollArea>
  );
}

const TablePreview = ({
  chartData,
  setOpenTableModal,
}: {
  chartData: ChartData[];
  setOpenTableModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [headers, setHeaders] = useState<string[]>([]);

  useEffect(() => {
    if (chartData?.length > 0) {
      setHeaders(
        Object.keys(chartData[0]).filter(
          (key) => key !== "id" && key !== "label"
        )
      );
    }
  }, [chartData]);

  return (
    <div className="space-y-4">
      <div className="w-[300px]">
        <ScrollArea className="w-full whitespace-nowrap">
          <Table className="border border-border w-full">
            <TableHeader>
              <TableRow className="border-b border-border">
                <TableCell className="font-bold text-center border-r border-border p-3">
                  Label
                </TableCell>
                {headers.map((header) => (
                  <TableCell
                    key={header}
                    className="font-bold text-center border-r border-border p-3"
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {chartData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="text-center border-r border-border p-3">
                    {row.label}
                  </TableCell>
                  {headers.map((header) => (
                    <TableCell
                      key={header}
                      className="text-center border-r border-border p-3"
                    >
                      {row[header]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="flex justify-center">
        <Button
          variant="default"
          size="sm"
          onClick={() => setOpenTableModal(true)}
        >
          See more
        </Button>
      </div>
    </div>
  );
};

const TableModal = ({
  open,
  setIsOpen,
}: {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [headers, setHeaders] = useState<string[]>([]);
  const [triggerWidth, setTriggerWidth] = useState<number>(0);
  const [editingHeaderMode, setEditingHeaderMode] = useState<string | null>(
    null
  );
  const [newHeaderName, setNewHeaderName] = useState<string>("");
  const triggerRef = useRef<HTMLTableCellElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [openAddColumnModal, setOpenAddColumnModal] = useState<boolean>(false);

  const { chartData, setChartData } = useChartStore((state) => state);

  useEffect(() => {
    if (chartData?.length > 0) {
      setHeaders(
        Object.keys(chartData[0]).filter(
          (key) => key !== "id" && key !== "label"
        )
      );
    }
  }, [chartData]);

  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setTriggerWidth(entry.contentRect.width);
      }
    });

    if (triggerRef.current) {
      ro.observe(triggerRef.current);
    }

    return () => {
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerRef?.current]);

  useEffect(() => {
    if (editingHeaderMode && inputRef.current) {
      inputRef.current.focus();
    }

    if (!editingHeaderMode) {
      setNewHeaderName("");
    }
  }, [editingHeaderMode]);

  const handleChange = (id: number, field: string, value: string) => {
    const updatedData = chartData.map((item: ChartData) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setChartData(updatedData);
  };

  const handleDelete = (id: number) => {
    const updatedData = chartData.filter((item: ChartData) => item.id !== id);
    setChartData(updatedData);
  };

  const handleAddRow = () => {
    const newId = Math.max(...chartData.map((item) => item.id), 0) + 1;
    const newRow = {
      id: newId,
      label: "",
      ...headers.reduce((acc, header) => ({ ...acc, [header]: "" }), {}),
    };

    const newChartData = [...chartData, newRow];

    setChartData(newChartData);
  };

  const handleAddColumn = () => {
    setHeaders([...headers, newHeaderName]);
    const updatedData = chartData.map((item) => ({
      ...item,
      [newHeaderName]: "",
    }));
    setChartData(updatedData);
    setNewHeaderName("");
    setOpenAddColumnModal(false);
  };

  const handleRemoveColumn = (header: string) => {
    setHeaders(headers.filter((h) => h !== header));
    const updatedData = chartData.map((item: ChartData) => {
      const { id, label, [header]: removedColumn, ...rest } = item;
      return { id, label, ...rest };
    });

    setChartData(updatedData);
  };

  const handleExport = () => {
    // Implement CSV/XLSX export logic here
    console.log("Exporting data...");
  };

  const handleEditColumnHeader = (header: string) => {
    setEditingHeaderMode(header);
    setNewHeaderName(header);
  };

  const handleSaveColumnHeader = () => {
    if (editingHeaderMode && newHeaderName) {
      setHeaders((prevHeaders) =>
        prevHeaders.map((h) => (h === editingHeaderMode ? newHeaderName : h))
      );

      const updatedData = (prevData: ChartData[]) =>
        prevData.map((item: ChartData) => {
          const { [editingHeaderMode]: oldValue, ...rest } = item;
          return {
            id: item.id,
            label: item.label,
            ...rest,
            [newHeaderName]: oldValue,
          };
        });

      setChartData(updatedData(chartData));
    }
  };

  const handleClearData = () => {
    setHeaders([]);
    setChartData([]);
  };

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl">
        <DialogHeader>
          <DialogTitle>Chart Data</DialogTitle>
          <DialogDescription>A table of your chart data.</DialogDescription>
          <div className="flex justify-end">
            <Button variant="destructive" size="sm" onClick={handleClearData}>
              Clear data
            </Button>
          </div>
        </DialogHeader>
        <div className="w-full overflow-x-auto">
          <Table className="border border-border min-w-full">
            <TableHeader>
              <TableRow className="border-b border-border">
                <TableCell className="font-bold text-center border-r border-border p-0">
                  Label
                </TableCell>
                {headers.map((header) => (
                  <TableCell
                    key={header}
                    className="font-bold border-r border-border p-0"
                    ref={triggerRef}
                  >
                    {editingHeaderMode === header ? (
                      <div className="flex items-center gap-2 p-2">
                        <Input
                          ref={inputRef}
                          size={12}
                          value={newHeaderName}
                          onChange={(e) => setNewHeaderName(e.target.value)}
                          onKeyUp={(e) => {
                            if (e.key === "Enter") {
                              handleSaveColumnHeader();
                            } else if (e.key === "Escape") {
                              setEditingHeaderMode(null);
                            }
                          }}
                          className="flex-grow"
                        />
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={handleSaveColumnHeader}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => setEditingHeaderMode(null)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="w-full justify-between font-bold focus:outline-none focus:ring-0 focus:ring-offset-0 ring-offset-0 ring-0 outline-none m-0"
                            style={{ boxShadow: "none", outline: "none" }}
                          >
                            {header}
                            <ChevronDown className="h-4 w-4 ml-2" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="center"
                          style={{ width: `${triggerWidth}px` }}
                        >
                          <DropdownMenuItem
                            onClick={() => handleEditColumnHeader(header)}
                          >
                            <Pencil className="mr-2 h-4 w-4" />
                            <span className="text-sm cursor-pointer">
                              Edit column
                            </span>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleRemoveColumn(header)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span className="text-sm text-red-500 cursor-pointer">
                              Delete column
                            </span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </TableCell>
                ))}
                <TableCell className="w-12">
                  <Dialog
                    open={openAddColumnModal}
                    onOpenChange={setOpenAddColumnModal}
                  >
                    <DialogTrigger asChild>
                      <PlusCircle className="h-4 w-4 cursor-pointer" />
                    </DialogTrigger>
                    <DialogContent className="max-w-xs">
                      <DialogHeader>
                        <DialogTitle>Add Column</DialogTitle>
                        <DialogDescription>
                          Enter the name of the new column.
                        </DialogDescription>
                      </DialogHeader>
                      <Input
                        ref={inputRef}
                        size={12}
                        value={newHeaderName}
                        onChange={(e) => setNewHeaderName(e.target.value)}
                        onKeyUp={(e) => {
                          if (e.key === "Enter") {
                            handleAddColumn();
                          }
                        }}
                        className="flex-grow"
                        placeholder="Column name"
                      />
                      <Button onClick={handleAddColumn}>Save</Button>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {chartData.map((item) => (
                <TableRow key={item.id} className="border-b border-border">
                  <TableCell key="label" className="border-r border-border p-0">
                    <Input
                      value={item.label}
                      onChange={(e) =>
                        handleChange(item.id, "label", e.target.value)
                      }
                      className="bg-transparent hover:bg-secondary focus:bg-secondary transition-colors shadow-none outline-none border-none rounded-none"
                      style={{
                        boxShadow: "none",
                      }}
                    />
                  </TableCell>
                  {headers.map((field) => (
                    <TableCell
                      key={field}
                      className="border-r border-border p-0"
                    >
                      <Input
                        value={item[field] as string}
                        onChange={(e) =>
                          handleChange(item.id, field, e.target.value)
                        }
                        className="bg-transparent hover:bg-secondary focus:bg-secondary transition-colors shadow-none outline-none border-none rounded-none"
                        style={{
                          boxShadow: "none",
                        }}
                      />
                    </TableCell>
                  ))}
                  <TableCell className="p-0 text-center">
                    <Trash2
                      className="h-4 w-4 cursor-pointer text-red-500 mx-auto"
                      onClick={() => handleDelete(item.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Button onClick={handleAddRow} className="mt-4">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Row
        </Button>
      </DialogContent>
    </Dialog>
  );
};
