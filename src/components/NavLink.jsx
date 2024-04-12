"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ link }) => {
  return <Link href={link.url}>{link.title}</Link>;
};

export default NavLink;
