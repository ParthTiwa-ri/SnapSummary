"use client";
import React, { useEffect } from "react";
import Header from "./AppHeader";
import Footer from "@/components/AppFooter";
import { useText } from "@/context/textProvider";
import MainContent from "./MainContent";

const UploadThingPage = () => {
  const { setExtractedText } = useText();
  useEffect(() => {
    setExtractedText("");
  }, [setExtractedText]);
  return (
    <div className="bg-[#150002] text-white min-h-screen flex flex-col">
      <MainContent />
      <Footer />
    </div>
  );
};

export default UploadThingPage;
