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
  TableIcon,
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
import { Separator } from "@/components/ui/separator";
import { FileDropzone } from "@/components/common/file-dropzone";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { toast } from "sonner";
import { useImportData } from "@/service/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Data() {
  const { chartData, setChartData } = useChartStore((state) => state);
  const [openTableModal, setOpenTableModal] = useState<boolean>(false);
  const [openImportPreviewModal, setOpenImportPreviewModal] =
    useState<boolean>(false);
  const [previewData, setPreviewData] = useState<any[] | null>(null);
  const importData = useImportData();
  const fileDropzoneRef = useRef<{ clearFiles: () => void }>(null);

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

  const handleImportData = (file: File) => {
    const fileType = file.name.split(".").pop()?.toLowerCase();
    if (fileType !== "xlsx" && fileType !== "xls" && fileType !== "csv") {
      toast.error("Invalid file type");
      fileDropzoneRef.current?.clearFiles();
      return;
    }

    importData.mutate(file, {
      onSuccess: (data) => {
        setPreviewData(data as any[]);
        setOpenImportPreviewModal(true);
        fileDropzoneRef.current?.clearFiles();
      },
      onError: (error) => {
        toast.error("Failed to import data");
        fileDropzoneRef.current?.clearFiles();
      },
    });
  };

  const handleConfirmImport = (transformedData: any[]) => {
    setChartData(transformedData);
    setPreviewData(null);
    setOpenImportPreviewModal(false);
    toast.success("Data imported successfully");
  };

  const handleCancelImport = () => {
    setPreviewData(null);
    setOpenImportPreviewModal(false);
    importData.reset(); // Reset the mutation state
  };

  return (
    <ScrollArea className="h-[65vh] md:h-[calc(100vh-200px)] w-full">
      <div className="space-y-4 w-full">
        <div>
          {chartData.length > 0 ? (
            <>
              <Text variant="sm" className="font-bold mb-3">
                Data Preview
              </Text>
              <TablePreview
                chartData={chartData.slice(0, 5)}
                setOpenTableModal={setOpenTableModal}
              />
            </>
          ) : (
            <div className="w-full mt-12 flex flex-col items-center justify-center align-center gap-6">
              <div className="w-full flex flex-col items-center justify-center align-center gap-4">
                <TableIcon className="w-12 h-12 text-muted-foreground" />
                <div className="text-center">
                  <Text variant="sm" className="font-bold">
                    No data available
                  </Text>
                  <Text variant="sm" className="text-muted-foreground">
                    Import your data or try sample data
                  </Text>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center align-center gap-4">
                <Button
                  variant="default"
                  className="w-3/4"
                  onClick={() => setOpenTableModal(true)}
                >
                  Create Data
                </Button>
                <Button
                  variant="outline"
                  className="w-3/4"
                  onClick={handleTryData}
                >
                  try an example data
                </Button>
              </div>
              <div className="w-full flex flex-row items-center justify-center align-center gap-4">
                <Separator className="my-4" />
                <Text variant="sm" className="text-center">
                  OR
                </Text>
                <Separator className="my-4" />
              </div>
              <FileDropzone
                ref={fileDropzoneRef}
                onFilesSelected={(files) => {
                  handleImportData(files[0]);
                }}
                loading={importData.isPending}
              />
            </div>
          )}
        </div>

        <TableModal open={openTableModal} setIsOpen={setOpenTableModal} />

        {previewData && (
          <TableImportPreview
            data={previewData}
            onConfirm={handleConfirmImport}
            onCancel={handleCancelImport}
            openImportPreviewModal={openImportPreviewModal}
            setOpenImportPreviewModal={setOpenImportPreviewModal}
          />
        )}
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
      <div className="w-[87vw] overflow-x-scroll md:overflow-x-hidden md:w-[300px]">
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

// Table Import Preview
const TableImportPreview = ({
  data,
  onConfirm,
  onCancel,
  openImportPreviewModal,
  setOpenImportPreviewModal,
}: {
  data: any[];
  onConfirm: (transformedData: any[]) => void;
  onCancel: () => void;
  openImportPreviewModal: boolean;
  setOpenImportPreviewModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const columnKeys =
    data.length > 0 ? Object.keys(data[0]).filter((key) => key !== "id") : [];

  const [labelColumn, setLabelColumn] = useState<string>(columnKeys[0] || "");
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);

  const handleConfirm = () => {
    if (!labelColumn) {
      toast.error("Please select a label column");
      return;
    }
    if (selectedColumns.length === 0) {
      toast.error("Please select at least one value column");
      return;
    }

    // Transform the data to match the expected format
    const transformedData = data.map((row, index) => {
      const newRow: any = {
        id: index + 1,
        label: row[labelColumn],
      };

      selectedColumns.forEach((column) => {
        newRow[column] = row[column];
      });

      return newRow;
    });

    onConfirm(transformedData);
  };

  return (
    <Dialog
      open={openImportPreviewModal}
      onOpenChange={setOpenImportPreviewModal}
    >
      <DialogContent className="max-w-4xl space-y-4">
        <DialogHeader>
          <DialogTitle>Import Preview</DialogTitle>
          <DialogDescription>
            Review your data before importing
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 p-4 border rounded-lg bg-muted/50">
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <Text variant="sm" className="font-medium mb-2 block">
                Label Column
              </Text>
              <Select value={labelColumn} onValueChange={setLabelColumn}>
                <SelectTrigger>
                  <SelectValue placeholder="Select label column" />
                </SelectTrigger>
                <SelectContent>
                  {columnKeys.map((key) => (
                    <SelectItem key={key} value={key}>
                      {key}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Text variant="sm" className="font-medium mb-2 block">
                Value Columns (max 3)
              </Text>
              <Select
                onValueChange={(value) => {
                  if (
                    !selectedColumns.includes(value) &&
                    selectedColumns.length >= 3
                  ) {
                    toast.error("Maximum 3 columns allowed");
                    return;
                  }
                  setSelectedColumns((current) =>
                    current.includes(value)
                      ? current.filter((item) => item !== value)
                      : [...current, value]
                  );
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select columns">
                    {selectedColumns.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {selectedColumns.map((column) => (
                          <Badge
                            key={column}
                            variant="secondary"
                            className="mr-1"
                          >
                            {column}
                          </Badge>
                        ))}
                      </div>
                    ) : null}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {columnKeys
                    .filter((key) => key !== labelColumn)
                    .map((key) => (
                      <SelectItem key={key} value={key}>
                        <div className="flex items-center gap-2">{key}</div>
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {selectedColumns.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selectedColumns.map((column) => (
                <div
                  key={column}
                  className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm flex items-center gap-1"
                >
                  {column}
                  <X
                    className="w-3 h-3 cursor-pointer"
                    onClick={() =>
                      setSelectedColumns((prev) =>
                        prev.filter((k) => k !== column)
                      )
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-end gap-2">
          <Button variant="outline" size="sm" onClick={onCancel}>
            <X className="w-4 h-4 mr-2" />
            Cancel
          </Button>
          <Button size="sm" onClick={handleConfirm}>
            <Check className="w-4 h-4 mr-2" />
            Confirm Import
          </Button>
        </div>

        <div className="w-full overflow-x-auto overflow-y-auto max-h-[40vh]">
          <Table>
            <TableHeader>
              <TableRow>
                {columnKeys.map((key) => (
                  <TableHead
                    key={key}
                    className={cn(
                      key === labelColumn && "bg-primary/10",
                      selectedColumns.includes(key) && "bg-secondary/10"
                    )}
                  >
                    {key}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={row.id || index}>
                  {columnKeys.map((key) => (
                    <TableCell
                      key={key}
                      className={cn(
                        key === labelColumn && "bg-primary/10",
                        selectedColumns.includes(key) && "bg-secondary/10"
                      )}
                    >
                      {row[key as keyof typeof row]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
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
        <div className="w-full overflow-x-auto overflow-y-auto max-h-[50vh]">
          <Table className="border border-border min-w-full">
            <TableHeader>
              <TableRow className="border-b border-border">
                <TableCell className="font-bold text-center border-r border-border px-10">
                  Label
                </TableCell>
                {headers.map((header) => (
                  <TableCell
                    key={header}
                    className="font-bold border-r border-border px-0"
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
