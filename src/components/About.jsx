import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      {/* CONTAINER */}
      <div
        className="max-w-[600px] mx-auto py-4 px-6 flex flex-col justify-center item-center text-center scroll-mt-24"
        id="om_mig"
      >
        {/* TEXT CONTAINER */}
        <h2 className="text-4xl py-4 font-lato font-semibold">Om Mig</h2>
        <p className="font-roboto font-normal leading-8 text-lg mb-4">
          Som fullstackutvecklare med inriktning på webbplattformar, erbjuder
          jag en mångsidig kompetens inom både frontend och backend. Med
          färdigheter inom MERN-stacken, React, JavaScript, TypeScript och
          UX/UI, strävar jag efter att skapa tekniskt robusta och
          användarvänliga lösningar.
        </p>
        <p className="font-roboto font-normal leading-8 text-lg">
          Jag har arbetat som frontendutvecklare och webbdesigner för
          e-handelssajten By Crea vilket har gett mig insikter i att leverera
          högkvalitativa webbapplikationer.
        </p>
      </div>
    </>
  );
};

export default About;
