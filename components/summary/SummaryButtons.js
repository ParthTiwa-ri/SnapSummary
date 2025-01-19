"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const SummaryButtons = ({ onSummaryClick, extractedText }) => {
  if (!extractedText) return null;

  return (
    <div className="grid grid-cols-2 gap-4 mb-6 justify-center">
      {["short", "medium", "long"].map((type) => (
        <Button
          key={type}
          variant="secondary"
          onClick={() => onSummaryClick(type)}
          className="w-full"
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Button>
      ))}
      <Link href="./extractedText">
        <Button variant="secondary" className="w-full">
          Show Extracted Text
        </Button>
      </Link>
    </div>
  );
};

export default SummaryButtons;
