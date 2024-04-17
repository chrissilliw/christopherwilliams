"use client";
import Image from "next/image";
import { CgScreen } from "react-icons/cg";
import { FaDev } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className="h-full pt-[150px] pb-[50px] flex flex-col items-center gap-8"
      id="hem"
    >
      <div className="w-[90%] max-w-[1200px] pb-[0px] flex flex-col xl:flex-row xl:justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
        >
          <h1 className="w-[100%] text-2xl md:text-4xl md:px-6 md:py-4 xl:text-4xl px-6 xl:py-5 rounded-xl  font-lato font-bold leading-[5rem] text-[#0E2F3E] bg-white shadow-xl shadow-black/[0.09]">
            Hej, Mitt namn är Chris
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-3 mt-8 xl:hidden">
          <Link href="#kontakt">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.45,
                duration: 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="px-5 py-3 flex items-center gap-2 rounded-full bg-slate-900 text-[#F8F7F1] shadow-xl shadow-black/[0.09]"
            >
              <p className="">Kontakta mig här</p>
              <FaLongArrowAltRight />
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.55,
              duration: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="px-5 py-3 flex items-center gap-2 rounded-full bg-white shadow-xl shadow-black/[0.09]"
          >
            <p className="font-medium">Ladda ner CV</p>
            <HiDownload />
          </motion.div>
        </div>

        <div className="relative flex justify-center items-center max-w-[650px] w-full h-[500px] md:h-[550px]">
          {/* REACT IMAGE CONTAINER */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="absolute w-[100px] h-[100px] md:w-[120px] md:h-[120px] top-[10%] right-[5%] flex  justify-center items-center  bg-white rounded-full shadow-xl shadow-black/[0.09] z-10"
          >
            <Image
              src="/logos/development/icons8-react-native.svg"
              alt="React Native logo"
              width={65}
              height={0}
              className="md:w-[75px]"
            />
          </motion.div>
          {/* NODE IMAGE CONTAINER */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="absolute top-[15%] left-[6%] md:left-[10%] flex w-[100px] h-[100px] md:w-[110px] md:h-[110px] justify-center items-center  bg-white rounded-full shadow-xl shadow-black/[0.09] z-10"
          >
            <Image
              src="/logos/development/icons8-nodejs.svg"
              alt="Node JS logo"
              width={50}
              height={0}
              className="md:w-[60px]"
            />
          </motion.div>
          {/* NEXT IMAGE CONTAINER */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="absolute bottom-[8%] left-[0%] flex w-[105px] h-[105px] md:w-[120px] md:h-[120px] md:left-[5%] justify-center items-center  bg-white rounded-full shadow-xl shadow-black/[0.09] z-10"
          >
            <Image
              src="/logos/development/icons8-nextjs.svg"
              alt="Next JS logo"
              width={65}
              height={0}
              className="md:w-[75px]"
            />
          </motion.div>
          {/* FIGMA IMAGE CONTAINER */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="absolute w-[100px] h-[100px] md:w-[120px] md:h-[120px] right-[10%] bottom-[10%] flex justify-center items-center  bg-white rounded-full shadow-xl shadow-black/[0.07]  z-10"
          >
            <Image
              src="/logos/development/icons8-figma.svg"
              alt="Figma logo"
              width={50}
              height={0}
              className="md:w-[60px]"
            />
          </motion.div>
          {/* IMAGE CONTAINER */}
          <div className="h-[230px] w-[230px] md:h-[300px] md:w-[300px] flex flex-col relative  z-0">
            <div>
              <Image
                src="/images/self-image_yellow2.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:flex flex-col md:flex-row gap-3 mb-8">
        <Link href="#kontakt">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="px-5 py-3 flex items-center gap-2 rounded-full bg-slate-900 text-[#F8F7F1] shadow-xl shadow-black/[0.09]"
          >
            <p className="">Kontakta mig här</p>
            <FaLongArrowAltRight />
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.55,
            duration: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          className="px-5 py-3 flex items-center gap-2 rounded-full bg-white shadow-xl shadow-black/[0.09]"
        >
          <p className="font-medium">Ladda ner CV</p>
          <HiDownload />
        </motion.div>
      </div>
      <div className="max-w-[1000px] w-[80%] md:w-[90%] py-8 px-6 flex flex-col md:flex-row md:gap-4 justify-center rounded-3xl bg-white relative">
        <div className="px-8 py-3  flex flex-1 items-center gap-2 mb-5 md:mb-0 border rounded-xl shadow-lg shadow-black/[0.03]">
          <div className="bg-green-700 p-4 rounded-full">
            <CgScreen className="text-white w-[20px] h-[20px]" />
          </div>
          <h3 className="font-roboto">Webbutvecklare</h3>
        </div>
        <div className="px-5 py-3  flex flex-1 items-center gap-2 mb-5 md:mb-0 border rounded-xl shadow-lg shadow-black/[0.03]">
          <div className="bg-yellow-500 p-4 rounded-full">
            <FaDev className="text-white w-[20px] h-[20px]" />
          </div>
          <div className="font-roboto">Frontendutvecklare</div>
        </div>
        <div className="px-5 py-3  flex flex-1 items-center gap-2 border rounded-xl shadow-lg shadow-black/[0.03]">
          <div className="bg-orange-400 p-4 rounded-full">
            <MdOutlineDesignServices className="text-white w-[20px] h-[20px]" />
          </div>
          <div className="font-roboto">Webbdesigner</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
