"use client";
import { IoIosArrowDropleft } from "react-icons/io";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Link from "next/link";

const Project = ({ project }) => {
  const title = project.title;
  const description = project.description;
  const tags = project.tags;
  const imageURL = project.imageURL;
  const imageLarge = project.imageLargeURL;
  const link = project.url;

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const [sectionSwap, setSectionSwap] = useState(false);

  const swapRight = () => {
    setSectionSwap(true);
  };

  const swapLeft = () => {
    setSectionSwap(false);
  };

  return (
    <div
      className={`w-[200%] flex h-auto ${
        sectionSwap
          ? "-translate-x-1/2 transition ease-in-out duration-[400ms]"
          : "transition ease-in-out duration-[500ms]"
      }`}
    >
      <div className="w-[50%] h-auto">
        <motion.div
          className="group mx-auto mb-3 sm:mb-8 last:mb-0 max-w-[42rem] cursor-pointer "
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
          onClick={swapRight}
        >
          <section className="w-[90%] mx-auto bg-gray-100  border border-black/5 mb-8 overflow-hidden sm:pr-8 relative rounded-lg sm:h-[22rem] group-even:pl-8 hover:bg-gray-200 transition">
            <div className="group-even:ml-[18rem] pt-4 pb-8 px-5 flex flex-col h-full sm:pl-10 sm:pr-2 sm:pt-10 max-w-[55%] md:max-w-[49%] lg:max-w-[50%]">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed">{description}</p>
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {tags.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src={imageURL}
              alt={title}
              quality={95}
              className="absolute top-20 -right-40 w-[20rem] sm:w-[24rem] md:w-[28.25rem] rounded-t-lg shadow-2xl 
            transition ease-in-out duration-300
            group-hover: scale-[1.05]
            group-hover:-translate-x-3 
            group-hover:-translate-y-3 
            group-hover:-rotate-2 

            group-even:group-hover:translate-x-3 
            group-even:group-hover:translate-y-3 
            group-even:group-hover:rotate-2 

            group-even:right-[initial] 
            group-even:-left-40"
            />
          </section>
        </motion.div>
      </div>
      <div className={` ${sectionSwap ? "w-[50%] flex flex-col" : "hidden"}`}>
        <div className="max-w-[700px] w-[90%] h-full mx-auto mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[40px] h-[40px] cursor-pointer">
              <IoIosArrowDropleft
                className="w-full h-full"
                onClick={swapLeft}
              />
            </div>
            <h4 className="uppercase text-xl">{title}</h4>
          </div>
          <div className="w-full">
            <div className="relative m-h-[600px] mb-6">
              <Image
                src={imageLarge}
                alt={title}
                objectFit="contain"
                objectPosition="center"
                width="600"
                height="0"
                size="100%"
                className="w-full h-auto"
              />
            </div>
            <Link
              href={link}
              className="py-3 px-4 justify-center rounded-md border-solid border-2 border-green-700 text-green-700 uppercase hover:bg-green-700 hover:text-[#F8F7F1] transition"
              target="_blank"
            >
              Se källkod
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
