"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { links } from "@/lib/links";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      width: 20,
      rotate: 45,
      // backgroundColor: "rgb(255, 255, 255)",
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
      width: 20,
      rotate: -45,
      // backgroundColor: "rgb(255, 255, 255)",
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

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 h-[70px] w-screen flex z-20">
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 h-[70px] w-[90%] flex items-center justify-between rounded-full shadow-lg shadow-black/[0.03] px-4 sm:px-8 md:px-12 lg:20 xl:px-10 bg-opacity-90 bg-white hover:bg-opacity-[.98] transition duration-200 z-20">
        {/* LOGO CONTAINER */}
        <div className="flex">
          <Link href="#hem">
            <Image
              src="/logos/cc-logo-black.svg"
              alt="Logo"
              width={40}
              height={40}
            />
          </Link>
        </div>
        {/* NAVBAR LINKS CONTAINER */}
        <div className="hidden md:flex gap-12">
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
        <div className="hidden md:flex gap-4">
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
        {/* HAMBURGER BUTTON CONTAINER */}
        <div className="md:hidden">
          <button
            className="w-10 h-4 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen(!open)}
          >
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-6 h-0.5 bg-black rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-8 h-0.5 bg-black rounded"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-4 h-0.5 bg-black rounded origin-left"
            ></motion.div>
          </button>
        </div>
      </div>
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute top-0 right-0 left-0 h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl"
        >
          {links.map((link) => (
            <motion.div
              variants={listItemVariants}
              className=""
              onClick={() => setOpen(!open)}
              key={link.title}
            >
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
