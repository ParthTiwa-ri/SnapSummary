import React from "react";
import WhySnapItem from "@/components/WhySnapItem";
import whySnapSummaryData from "@/data/whySnapSummaryData.json";

const WhySnapSummaryPage = () => {
  return (
    <div className="bg-[#150002] text-white min-h-screen">
      <div className="bg-[#1A0002] py-8 sm:py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
            Why SnapSummary?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {whySnapSummaryData.map((item, index) => (
              <WhySnapItem
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySnapSummaryPage;
