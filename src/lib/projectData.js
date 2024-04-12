import diamondsForYouImg from "/public/projects/diamondsForYou.jpg";
import pancakesImg from "/public/projects/pancakes.jpg";
import movieAppImg from "/public/projects/movieApp.jpg";
export const projectData = [
  {
    title: "Diamonds For You",
    description:
      "Diamond For You är en webbshop utvecklad med Parcel och TypeScript. Projektet erbjuder ett användarvänligt och responsivt gränssnitt. ",
    tags: ["Parcel", "React", "Typescript", "Bootstrap"],
    imageURL: diamondsForYouImg,
  },
  {
    title: "Pancakes",
    description:
      "En bokningsapp för en fiktiv pannkaksrestaurang, utvecklad med React och TypeScript. Appen innehåller landningssida, bokningssida samt en adminsida.",
    tags: ["React", "Typescript", "styled components"],
    imageURL: pancakesImg,
  },
  {
    title: "Movie App",
    description:
      "En webbapplikation som innehåller information om filmer och teveserier. ",
    tags: ["NextJS", "Typescript", "Socket.io", "Tailwind CSS", "Material.UI"],
    imageURL: movieAppImg,
  },
];
