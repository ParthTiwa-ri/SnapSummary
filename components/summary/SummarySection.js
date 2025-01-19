"use client";
import React from "react";
import ListDisplay from "@/components/summary/ListDisplay";
import DisplaySummary from "./DisplaySummary";

const SummarySection = ({ parsedSummary, rawSummary }) => {
  if (!rawSummary) return null;

  return (
    <div className="mt-6 p-6 border border-red-400 rounded-lg shadow-md">
      {parsedSummary ? (
        <div>
          <DisplaySummary />
          <ListDisplay title="Key Points" items={parsedSummary.keyPoints} />
          <ListDisplay title="Main Ideas" items={parsedSummary.mainIdeas} />
          <ListDisplay title="Details" items={parsedSummary.details} />
        </div>
      ) : (
        <p className="text-gray-300">{rawSummary}</p>
      )}
    </div>
  );
};

export default SummarySection;
