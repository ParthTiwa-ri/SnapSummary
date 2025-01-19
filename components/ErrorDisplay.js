"use client";
import React from "react";

const ErrorDisplay = ({ errorMessage }) => {
  if (!errorMessage) return null;

  return (
    <div className="mt-4 p-4 border border-red-600 bg-red-800 text-white rounded-md">
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorDisplay;
