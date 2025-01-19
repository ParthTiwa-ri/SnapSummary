"use client";

import { useText } from "@/context/textProvider";

export default function DisplayFormattedText() {
  const { extractedText } = useText();

  return (
    <div className="min-h-screen flex items-center justify-center  p-2 sm:p-6 pt-8">
      <div className="w-full max-w-6xl bg-[#150002] border border-[#F77171] rounded-lg overflow-hidden">
        {/* Title */}
        <h2 className="text-2xl font-bold text-white  border-b-2 p-4 text-center">
          Extracted Text
        </h2>

        {/* Display the full content */}
        <pre className="whitespace-pre-wrap text-sm font-mono text-gray-200 bg-[#150002] p-6 rounded-b-lg">
          {extractedText}
        </pre>
      </div>
    </div>
  );
}
