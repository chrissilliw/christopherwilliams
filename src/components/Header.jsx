import Image from "next/image";
import { CgScreen } from "react-icons/cg";
import { FaDev } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

const Header = () => {
  return (
    <div
      className="h-full pt-[150px] pb-[50px] flex flex-col items-center gap-8"
      id="hem"
    >
      <h1 className="w-[30%] text-6xl font-lato font-bold leading-[5rem] text-[#0E2F3E]">
        Hej, Mitt namn är Chris
      </h1>
      <Image src="/logos/figma.svg" alt="Figma logo" width={24} height={24} />
      {/* IMAGE CONTAINER */}
      <div className="h-[350px] w-2/3 flex flex-col relative">
        <Image
          src="/images/self-image_yellow2.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="max-w-[1000px] w-[80%] py-8 px-6 flex justify-center gap-4 rounded-3xl bg-white relative">
        <div className="px-8 py-3  flex flex-1 items-center gap-2 border rounded-xl shadow-lg shadow-black/[0.03]">
          <div className="bg-green-700 p-4 rounded-full">
            <CgScreen className="text-white w-[20px] h-[20px]" />
          </div>
          <h3 className="font-roboto">Webbutvecklare</h3>
        </div>
        <div className="px-5 py-3  flex flex-1 items-center gap-2 border rounded-xl shadow-lg shadow-black/[0.03]">
          <div className="bg-yellow-500 p-4 rounded-full">
            <FaDev className="text-white w-[20px] h-[20px]" />
          </div>
          <div className="font-lato">Fullstack</div>
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
