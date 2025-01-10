import React from "react";
import { twMerge } from "tailwind-merge";

const SectionTitle = ({ title, subtitle, className }) => {
  return (
    <div className={twMerge(" my-6", className)}>
      <h2 className="text-2xl font-bold text-[#01B4FF] sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-gray-600 sm:text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
