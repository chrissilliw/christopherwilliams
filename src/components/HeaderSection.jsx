import Image from "next/image";
import { HiDownload } from "react-icons/hi";

const HeaderSection = () => {
  return (
    <div
      className="h-screen flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:20 xl:px-48 gap-14"
      id="hem"
    >
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative z-0 pointer-events-none">
        <Image
          src="/images/self-image.png"
          alt=""
          fill
          className="object-contain z-0 pointer-events-none"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col pt-10 gap-8 items-center justify-center">
        <h1 className="w-full text-4xl font-bold">Christopher Williams</h1>
        <h2 className="w-full text-2xl font-semibold">Webbutvecklare</h2>
        <p>
          Välkommen till mitt webbportfolio! Jag är en passionerad
          fullstackutvecklare med expertis inom React, NextJS, Node, MongoDB och
          MySQL. Med erfarenhet från e-handelssajter och studier inom UX strävar
          jag efter att skapa moderna och användarvänliga webbapplikationer.
        </p>
        <div className="w-full flex gap-4">
          <button className="flex items-center px-5 py-3 gap-2 rounded-full ring-1 ring-black bg-black text-white">
            Ladda ner CV
            <HiDownload />
          </button>
          <button className="px-5 py-3 rounded-full ring-1 ring-black bg-black text-white">
            Kontakta mig
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
