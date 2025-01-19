"use client";

import React, { useState, useEffect } from "react";
import { useText } from "@/context/textProvider";
import { runPointWise } from "../../lib/api/geminiAPi_pointwise";
import LoadingBar from "../LoadingBar";
import SummarySection from "./SummarySection";
import ErrorDisplay from "../ErrorDisplay";

const DisplayTextPointWise = () => {
  const { extractedText } = useText();
  const [summary, setSummary] = useState("");
  const [parsedSummary, setParsedSummary] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (extractedText) {
      getSummary();
    }
  }, [extractedText]);

  const getSummary = async () => {
    if (!extractedText) return;

    setIsLoading(true);
    setProgress(0);
    setSummary("");
    setParsedSummary(null);
    setError("");

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 80 ? prev + 10 : prev));
    }, 300);

    try {
      let summaryText = await runPointWise(extractedText);

      summaryText = summaryText.trim();
      if (summaryText.startsWith("```json")) {
        summaryText = summaryText.slice(7);
      }
      if (summaryText.endsWith("```")) {
        summaryText = summaryText.slice(0, -3);
      }

      const parsed = JSON.parse(summaryText);

      clearInterval(progressInterval);
      setProgress(100);

      setSummary(summaryText);
      setParsedSummary(parsed);
    } catch (error) {
      clearInterval(progressInterval);
      setError("Error: Unable to parse summary. Please check the format.");
      console.error("Parsing error:", error.message);
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  return (
    <div className="p-4">
      {isLoading && <LoadingBar progress={progress} summaryType="point-wise" />}
      {!isLoading && error && <ErrorDisplay errorMessage={error} />}
      {!isLoading && summary && (
        <>
          <h1 className="text-white text-2xl font-bold text-center">Summary</h1>

          <SummarySection parsedSummary={parsedSummary} rawSummary={summary} />
        </>
      )}
    </div>
  );
};

export default DisplayTextPointWise;
