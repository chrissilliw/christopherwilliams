import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:20 xl:px-48">
      <div className="">
        <Link href="/">Logo</Link>
      </div>
      <div className="">2</div>
    </div>
  );
};

export default Navbar;
