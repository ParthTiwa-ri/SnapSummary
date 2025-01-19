"use client";
import React from "react";

const SummaryDisplay = ({ summary }) => {
  return (
    <div className="bg-[#2b2f36] p-4 rounded-lg shadow-md">
      <p className="text-gray-200">{summary}</p>
    </div>
  );
};

export default SummaryDisplay;
