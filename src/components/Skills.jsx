import React from "react";

const Skills = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "SCSS",
    "Tailwind CSS",
    "NodeJS",
    "UX/UI",
    "GIT",
    "PHP",
    "MongoDB",
    "MySQL",
    "ExpressJS",
    "GraphQL",
  ];
  return (
    <>
      <h2 className="py-5 text-xl">Kunskaper inom</h2>
      <div className="flex flex-wrap gap-3 w-3/5">
        {skills.map((skill) => (
          <div className="py-1 px-2 justify-center rounded bg-black text-white">
            {skill}
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
