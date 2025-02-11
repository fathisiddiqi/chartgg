"use client";

import type * as React from "react";
import { useCallback, useState, useImperativeHandle, forwardRef } from "react";
import { FileIcon, UploadIcon, Loader2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FileDropzoneProps {
  onFilesSelected: (files: File[]) => void;
  className?: string;
  loading?: boolean;
}

interface FileDropzoneRef {
  clearFiles: () => void;
}

export const FileDropzone = forwardRef<FileDropzoneRef, FileDropzoneProps>(
  ({ onFilesSelected, className, loading }: FileDropzoneProps, ref) => {
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState<File[]>([]);

    const handleDrag = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setIsDragging(true);
      } else if (e.type === "dragleave") {
        setIsDragging(false);
      }
    }, []);

    const validateFiles = useCallback((fileList: FileList | null): File[] => {
      if (!fileList) return [];

      return Array.from(fileList).filter((file) => {
        const validTypes = [
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // xlsx
          "application/vnd.ms-excel", // xls
          "text/csv", // csv
        ];
        return validTypes.includes(file.type);
      });
    }, []);

    const handleDrop = useCallback(
      (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        if (loading) return;

        const validFiles = validateFiles(e.dataTransfer.files);
        if (validFiles.length > 0) {
          setFiles(validFiles);
          onFilesSelected(validFiles);
        }
      },
      [onFilesSelected, validateFiles, loading]
    );

    const handleFileInput = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (loading) return;

        const validFiles = validateFiles(e.target.files);
        if (validFiles.length > 0) {
          setFiles(validFiles);
          onFilesSelected(validFiles);
        }
      },
      [onFilesSelected, validateFiles, loading]
    );

    const clearFiles = useCallback(() => {
      setFiles([]);
    }, []);

    useImperativeHandle(ref, () => ({
      clearFiles,
    }));

    return (
      <div className={cn("w-full max-w-md mx-auto", className)}>
        <div
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          className={cn(
            "relative border-2 border-dashed rounded-lg p-8",
            "flex flex-col items-center justify-center gap-4",
            "transition-colors duration-200",
            {
              "border-primary bg-primary/5": isDragging,
              "border-muted-foreground/25": !isDragging,
              "pointer-events-none opacity-50": loading,
            }
          )}
        >
          <div className="flex flex-col items-center gap-2 text-center">
            {loading ? (
              <>
                <Loader2Icon className="h-8 w-8 text-muted-foreground/50 animate-spin" />
                <p className="text-sm text-muted-foreground">Processing file...</p>
              </>
            ) : (
              <>
                <UploadIcon className="h-8 w-8 text-muted-foreground/50" />
                <p className="text-sm text-muted-foreground">Drag files here</p>
                <p className="text-xs text-muted-foreground">
                  (supported files .xlsx .xls .csv)
                </p>
              </>
            )}
          </div>

          {files.length > 0 && !loading && (
            <div className="flex items-center gap-2 text-sm">
              <FileIcon className="h-4 w-4" />
              <span>{files.map((f) => f.name).join(", ")}</span>
            </div>
          )}

          <label htmlFor="file-upload" className={cn("cursor-pointer", { "pointer-events-none": loading })}>
            <Button variant="outline" className="mt-2" asChild disabled={loading}>
              <span>{loading ? "Processing..." : "Choose File"}</span>
            </Button>
          </label>
          <input
            id="file-upload"
            type="file"
            className="sr-only"
            accept=".xlsx,.xls,.csv"
            onChange={handleFileInput}
            multiple
            disabled={loading}
          />
        </div>
      </div>
    );
  }
);

FileDropzone.displayName = "FileDropzone";
