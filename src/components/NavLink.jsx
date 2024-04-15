"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ link }) => {
  return (
    <Link href={link.url} className="text-[#0E2F3E] text-md uppercase">
      {link.title}
    </Link>
  );
};

export default NavLink;
