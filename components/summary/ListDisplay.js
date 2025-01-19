"use client";
import React from "react";

const ListDisplay = ({ title, items }) => {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div className="mb-6">
      <h4 className="text-md font-semibold text-green-400 mb-2">{title}:</h4>
      <ul className="list-disc pl-6 text-gray-300 space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListDisplay;
