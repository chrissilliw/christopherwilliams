import React from "react";
import { projectData } from "@/lib/projectData";
import Project from "./Project";
const Projects = () => {
  return (
    <>
      <div className="scroll-mt-28 flex flex-col" id="projekt">
        <h2 className="py-4 text-center text-4xl font-lato font-semibold z-0">
          Projekt
        </h2>
        <div className="">
          {projectData.map((project, index) => (
            <React.Fragment key={index}>
              <Project project={project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
