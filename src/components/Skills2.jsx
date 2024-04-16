import Image from "next/image";
import { skillsData } from "@/lib/skills";

const Skills = () => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-4 lg:grid-cols-5 py-10 px-3 mx-auto justify-center gap-4 max-w-[700px]">
          {skillsData.map((skill) => (
            <div className="flex flex-col justify-center items-center">
              <div className="flex w-[90px] h-[90px] py-4 px-4 justify-center items-center rounded-full bg-yellow-100 text-white">
                <Image src={skill.image} alt={`skill.title`} width={50} />
              </div>
              <h4 className="mt-2">{skill.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
