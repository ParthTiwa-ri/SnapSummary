// components/WhySnapItem.js

import React from "react";

const WhySnapItem = ({ title, description }) => {
  return (
    <div className="border p-4 sm:p-6 rounded-md text-center">
      <h3 className="text-lg sm:text-xl font-semibold mb-4">{title}</h3>
      <p className="text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default WhySnapItem;
