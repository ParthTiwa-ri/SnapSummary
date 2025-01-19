"use client";
import React, { useState } from "react";
import { useText } from "@/context/textProvider";
import { run } from "../../lib/api/geminiAPi";
import SummaryButtons from "./SummaryButtons";
import LoadingBar from "../LoadingBar";
import SummaryDisplay from "./SummaryDisplay";

function DisplaySummary() {
  const { extractedText } = useText(); // Access extracted text from context
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading status
  const [progress, setProgress] = useState(0); // State for progress percentage
  const [summaryType, setSummaryType] = useState(""); // Current summary type

  const getSummary = async (type) => {
    if (!extractedText) return;

    setIsLoading(true);
    setProgress(0);
    setSummary("");
    setSummaryType(type);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 80 ? prev + 10 : prev));
    }, 300);

    try {
      const summaryText = await run(extractedText, type);
      clearInterval(progressInterval);
      setProgress(100);
      setSummary(summaryText);
    } catch (error) {
      clearInterval(progressInterval);
      console.error("Error generating summary:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  return (
    <div className="p-2 sm:p-6 mb-4 max-w-3xl mx-auto text-white">
      <SummaryButtons
        onSummaryClick={getSummary}
        extractedText={extractedText}
      />

      {isLoading && (
        <LoadingBar progress={progress} summaryType={summaryType} />
      )}

      {summary && !isLoading && <SummaryDisplay summary={summary} />}
    </div>
  );
}

export default DisplaySummary;
