import * as pdfjsLib from "pdfjs-dist";
import Tesseract from "tesseract.js";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

export const processPdfFile = async (file, setProgress, abortSignal) => {
  const pdfData = new Uint8Array(file);
  const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
  const totalPages = pdf.numPages;
  let fullExtractedText = "";

  for (let i = 1; i <= totalPages; i++) {
    if (abortSignal.aborted) return { text: fullExtractedText, progress: 100 };

    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: 4 });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({ canvasContext: context, viewport: viewport }).promise;
    const imageSrc = canvas.toDataURL();

    try {
      const {
        data: { text },
      } = await Tesseract.recognize(imageSrc, "eng", {
        logger: (info) => {
          if (info.status === "recognizing text") {
            const progress = Math.round(
              ((info.progress + (i - 1)) / totalPages) * 100
            );
            setProgress(progress);
          }
        },
      });
      fullExtractedText += text + "\n";
    } catch (error) {
      console.error("Tesseract Error:", error);
    }
  }

  return { text: fullExtractedText, progress: 100 };
};

export const processImageFile = async (file, setProgress, abortSignal) => {
  let fullExtractedText = "";
  try {
    const {
      data: { text },
    } = await Tesseract.recognize(file, "eng", {
      logger: (info) => {
        if (info.status === "recognizing text") {
          const progress = Math.round(info.progress * 100);
          setProgress(progress);
        }
      },
    });

    fullExtractedText = text;
  } catch (error) {
    console.error("Tesseract Error:", error);
  }

  return { text: fullExtractedText, progress: 100 };
};
