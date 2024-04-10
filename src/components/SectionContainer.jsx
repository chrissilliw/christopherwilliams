import React from "react";

const SectionContainer = ({ children }) => {
  return (
    <div className="  lg:flex-row py-10 px-4 sm:px-8 md:px-12 lg:20 xl:px-48">
      {children}
    </div>
  );
};

export default SectionContainer;
