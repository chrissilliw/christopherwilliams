import React from "react";

const About = () => {
  return (
    <>
      {/* CONTAINER */}
      <div
        className="max-w-[500px] mx-auto py-4 px-7 flex flex-col justify-center item-center text-center scroll-mt-24"
        id="om_mig"
      >
        {/* TEXT CONTAINER */}
        <h2 className="text-4xl py-4 font-lato font-semibold">Om Mig</h2>
        <p className="font-roboto font-normal leading-8">
          Hej! Mitt namn är Christopher Williams. Jag är tvåbarnspappa och
          student på Medieinstitutet som läser Webbutveckling inom e-handel. Jag
          har en passion för data och webb och försöker hela tiden utvecklas och
          lära mig mer för att skapa funktionsdugliga och användarvänliga
          webbapplikationer och hemsidor. Dessutom är jag en väldigt trevlig
          kille och har lätt att komma in i nya team.
        </p>
      </div>
    </>
  );
};

export default About;
