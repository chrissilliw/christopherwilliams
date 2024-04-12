import { skills } from "@/lib/skills";

const Skills = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-wrap py-10 mx-auto justify-center gap-3 w-4/5">
          {skills.map((skill) => (
            <div className="py-2 px-3 justify-center rounded-lg bg-black text-white">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
