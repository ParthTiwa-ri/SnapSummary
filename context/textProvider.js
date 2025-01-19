// context/TextContext.js
"use client";
import React, { createContext, useState, useContext } from "react";

// Create the context
const TextContext = createContext();

// Create the provider component
export const TextProvider = ({ children }) => {
  const [extractedText, setExtractedText] = useState("");

  return (
    <TextContext.Provider value={{ extractedText, setExtractedText }}>
      {children}
    </TextContext.Provider>
  );
};

// Create a custom hook for easier access to the context
export const useText = () => {
  return useContext(TextContext);
};
