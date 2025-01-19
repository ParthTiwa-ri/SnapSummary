import React from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import { Toaster } from "sonner";
import { useText } from "@/context/textProvider";
import useFileHandler from "@/hooks/useFileHandler";
import FilePreview from "@/components/dropzone/FilePreview";

export default function MyDropzone() {
  const { setExtractedText } = useText();
  const { file, progress, hideUpload, onDrop, removeFile } =
    useFileHandler(setExtractedText);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [], "image/*": [] },
    maxFiles: 1,
    maxSize: 1024 * 1024 * 5,
  });

  return (
    <div className="relative flex flex-col gap-6 p-4 overflow-hidden text-white">
      <Toaster />
      {!hideUpload && (
        <div
          {...getRootProps()}
          className={`relative grid h-52 w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-gray-700/50 px-5 py-2.5 text-center transition hover:bg-gray-700/25 ${
            isDragActive ? "border-gray-500" : ""
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="rounded-full border border-dashed p-3">
              <Upload className="size-7 text-gray-500" aria-hidden="true" />
            </div>
            <p className="font-medium text-gray-300">
              {isDragActive
                ? "Drop the file here"
                : "Drag and drop a file here, or click to select a file"}
            </p>
          </div>
        </div>
      )}
      {file && (
        <FilePreview file={file} progress={progress} removeFile={removeFile} />
      )}
    </div>
  );
}
