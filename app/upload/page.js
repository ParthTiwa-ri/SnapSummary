"use client";
import MyDropzone from "@/components/dropzone/MyDropZone";
import DisplayFormattedText from "@/components/ExtractedText";
import DisplayTextPointWise from "@/components/summary/KeySummary";
import { useText } from "@/context/textProvider";
import DisplayText from "@/components/summary/DisplaySummary";
import Footer from "@/components/AppFooter";

function Page() {
  const { extractedText } = useText();

  return (
    <main className="w-full h-full relative">
      <main className="max-w-7xl mx-auto">
        <MyDropzone />

        {extractedText && <DisplayTextPointWise />}
      </main>
    </main>
  );
}

export default Page;
