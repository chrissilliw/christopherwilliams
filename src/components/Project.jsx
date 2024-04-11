"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const Project = ({ project }) => {
  const title = project.title;
  const description = project.description;
  const tags = project.tags;
  const imageURL = project.imageURL;

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="group mx-auto mb-3 sm:mb-8 last:mb-0 max-w-[42rem]"
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section className=" bg-gray-100  border border-black/5 overflow-hidden sm:pr-8 relative rounded-lg sm:h-[22rem] group-even:pl-8 hover:bg-gray-200 transition">
        <div className="group-even:ml-[18rem] pt-4 pb-8 px-5 flex flex-col h-full sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] ">
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
          /*width={300} height={200}*/ quality={95}
          className="absolute top-12 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
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
  );
};

export default Project;
