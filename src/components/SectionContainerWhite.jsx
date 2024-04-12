import React from "react";

const SectionContainerWhite = ({ children }) => {
  return (
    <div className="w-screen bg-white">
      <div className="  lg:flex-row py-10 px-4 sm:px-8 md:px-12 lg:20 xl:px-48">
        {children}
      </div>
    </div>
  );
};

export default SectionContainerWhite;
