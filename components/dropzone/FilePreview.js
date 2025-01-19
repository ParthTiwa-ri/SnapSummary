import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { X } from "lucide-react";

const FilePreview = ({ file, progress, removeFile }) => (
  <ScrollArea className="h-fit w-full px-3">
    <div className="relative flex items-center gap-2.5">
      <div className="flex flex-1 gap-2.5">
        {file.type.startsWith("image/") && (
          <Image
            src={file.preview}
            alt={file.name}
            width={48}
            height={48}
            loading="lazy"
            className="aspect-square shrink-0 rounded-md object-cover"
          />
        )}
        <div className="flex w-full flex-col gap-2">
          <p className="line-clamp-1 text-sm font-medium text-gray-200">
            {file.name}
          </p>
          <p className="text-xs text-gray-400">{`${(file.size / 1024).toFixed(
            2
          )} KB`}</p>
          {progress > 0 && progress < 100 && (
            <Progress value={progress} className="bg-gray-500" />
          )}
        </div>
      </div>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="size-7"
        onClick={removeFile}
      >
        <X className="size-4 text-gray-500" aria-hidden="true" />
        <span className="sr-only">Remove file</span>
      </Button>
    </div>
  </ScrollArea>
);

export default FilePreview;
