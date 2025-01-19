import { useState, useRef, useCallback } from "react";
import { toast } from "sonner";
import { processPdfFile, processImageFile } from "../utils/fileProcessing";

const useFileHandler = (setExtractedText) => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [hideUpload, setHideUpload] = useState(false);
  const abortController = useRef(null);

  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      if (acceptedFiles.length > 1) {
        toast.error("You can upload only one file at a time.");
        return;
      }

      if (rejectedFiles.length > 0) {
        const fileRejection = rejectedFiles[0];
        if (fileRejection.errors.some((e) => e.code === "file-invalid-type")) {
          toast.error(
            "Invalid file type. Only PDF and image files are allowed."
          );
        } else if (
          fileRejection.errors.some((e) => e.code === "file-too-large")
        ) {
          toast.error("File size exceeds the 5 MB limit.");
        } else {
          toast.error("You can upload only one file at a time.");
        }
        return;
      }

      if (acceptedFiles.length > 0) {
        const selectedFile = acceptedFiles[0];
        setFile(
          Object.assign(selectedFile, {
            preview: URL.createObjectURL(selectedFile),
          })
        );

        setHideUpload(true);
        const fileReader = new FileReader();
        const newAbortController = new AbortController();
        abortController.current = newAbortController;

        toast.info("Upload started...");

        fileReader.onload = async (event) => {
          const fileType = selectedFile.type;
          setProgress(0);
          let fullExtractedText = "";

          if (fileType === "application/pdf") {
            const { text, progress: finalProgress } = await processPdfFile(
              event.target.result,
              setProgress,
              newAbortController.signal
            );
            fullExtractedText = text;
            setProgress(finalProgress);
          } else if (fileType.startsWith("image/")) {
            const { text, progress: finalProgress } = await processImageFile(
              event.target.result,
              setProgress,
              newAbortController.signal
            );
            fullExtractedText = text;
            setProgress(finalProgress);
          }

          setExtractedText(fullExtractedText);
          setProgress(100);
          toast.success("File uploaded successfully!");
          setTimeout(() => setProgress(0), 100);
        };

        if (selectedFile.type === "application/pdf") {
          fileReader.readAsArrayBuffer(selectedFile);
        } else if (selectedFile.type.startsWith("image/")) {
          fileReader.readAsDataURL(selectedFile);
        }
      }
    },
    [setExtractedText]
  );

  const removeFile = () => {
    if (abortController.current) {
      abortController.current.abort();
      abortController.current = null;
    }
    setFile(null);
    setProgress(0);
    setExtractedText("");
    toast.error("File deleted successfully.");
    setHideUpload(false);
  };

  return {
    file,
    progress,
    hideUpload,
    onDrop,
    removeFile,
  };
};

export default useFileHandler;
