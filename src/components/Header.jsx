import Image from "next/image";
import { CgScreen } from "react-icons/cg";
import { FaDev } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

const Header = () => {
  return (
    <div
      className="h-full pt-[150px] pb-[100px] flex flex-col items-center gap-8"
      id="hem"
    >
      <h1 className="text-4xl font-bold">Hej, Mitt namn är Chris</h1>
      {/* IMAGE CONTAINER */}
      <div className="h-[350px] w-2/3 flex flex-col relative">
        <Image
          src="/images/self-image_yellow2.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="max-w-[1000px] w-[80%] py-8 px-6 flex justify-center gap-4 rounded-2xl bg-white relative">
        <div className="px-8 py-3  flex flex-1 items-center gap-2 border rounded-xl shadow-lg shadow-black/[0.03]">
          <div className="bg-green-700 p-4 rounded-full font-roboto">
            <CgScreen className="text-white w-[20px] h-[20px]" />
          </div>
          Webbutvecklare
        </div>
        <div className="px-5 py-3  flex flex-1 items-center gap-2 border rounded-xl shadow-lg shadow-black/[0.03]">
          <div className="bg-yellow-500 p-4 rounded-full">
            <FaDev className="text-white w-[20px] h-[20px]" />
          </div>
          Fullstack
        </div>
        <div className="px-5 py-3  flex flex-1 items-center gap-2 border rounded-xl shadow-lg shadow-black/[0.03]">
          <div className="bg-orange-400 p-4 rounded-full">
            <MdOutlineDesignServices className="text-white w-[20px] h-[20px]" />
          </div>
          Webbdesigner
        </div>
      </div>
    </div>
  );
};

export default Header;
