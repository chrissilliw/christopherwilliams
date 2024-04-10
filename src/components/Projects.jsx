import React from "react";
import diamondsForYouImg from "../../public/projects/diamondsForYou.jpg";
import pancakesImg from "../../public/projects/pancakes.jpg";
import movieAppImg from "../../public/projects/movieApp.jpg";
import Project from "./Project";
const Projects = () => {
  const projectData = [
    {
      title: "Diamonds For You",
      description:
        "Diamond For You är en webbshop utvecklad med Parcel och TypeScript. Projektet erbjuder ett användarvänligt och responsivt gränssnitt där användare kan bläddra bland företagets fiktiva diamantprodukter och genomföra köpprocessen med hjälp av kundvagn och kassa.",
      tags: ["Parcel", "React", "Typescript", "Bootstrap"],
      imageURL: diamondsForYouImg,
    },
    {
      title: "Pancakes",
      description:
        "En bokningsapp för en fiktiv pannkaksrestaurang, utvecklad med React och TypeScript. Appen innehåller landningssida, bokningssida samt en adminsida för restaurangens personal att hantera bokningar.",
      tags: ["React", "Typescript", "styled components"],
      imageURL: pancakesImg,
    },
    {
      title: "Movie App",
      description:
        "En webbapplikation som innehåller information om filmer och teveserier. ",
      tags: [
        "NextJS",
        "Typescript",
        "Socket.io",
        "Tailwind CSS",
        "Material.UI",
      ],
      imageURL: movieAppImg,
    },
  ];
  return (
    <>
      <h2 className="py-5 text-xl">Projekt</h2>
      <div className="">
        {projectData.map((project, index) => (
          <React.Fragment key={index}>
            <Project project={project} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Projects;
