"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const links = [
    { url: "/", title: "Hem" },
    { url: "/om_mig", title: "Om Mig" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/kontakt", title: "Kontakt" },
  ];
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:20 xl:px-48">
      <div className="hiddden md:flex">
        <Link href="/">Logo</Link>
      </div>
      <div className="hidden md:flex gap-4">
        {links.map((link) => (
          //   <Link href={link.url} key={link.title}>
          //     {link.title}
          //   </Link>
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      <div className="flex gap-4">
        <Link href="">
          <Image
            src="/logos/github.svg"
            alt="github logo"
            width={24}
            height={24}
          />
        </Link>
        <Link href="">
          <Image
            src="/logos/linkedin.svg"
            alt="linkedin logo"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
