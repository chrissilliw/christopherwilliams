import React from "react";

const SectionContainerFullWidth = ({ children }) => {
  return (
    <div className="w-screen bg-[#F8F7F1]">
      <div className="  lg:flex-row py-10">{children}</div>
    </div>
  );
};

export default SectionContainerFullWidth;
