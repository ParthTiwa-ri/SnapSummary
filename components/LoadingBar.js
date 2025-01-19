"use client";
import React from "react";

const LoadingBar = ({ progress, summaryType }) => {
  return (
    <div className="my-4">
      <div className="w-full h-2 bg-[#2d3748] rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-300 mt-2">
        Generating {summaryType} summary... {progress}%
      </p>
    </div>
  );
};

export default LoadingBar;
