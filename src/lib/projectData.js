import diamondsForYouImg from "/public/projects/diamondsForYou.jpg";
import pancakesImg from "/public/projects/pancakes.jpg";
import movieAppImg from "/public/projects/movieApp.jpg";
import diamondsForYouLarge from "/public/projects/large/DiamondsForYou.jpg";
import pancakesLarge from "/public/projects/large/Pancakes.jpg";
import movieAppLarge from "/public/projects/large/movieApp.jpg";
export const projectData = [
  {
    title: "Diamonds For You",
    description:
      "Diamond For You är en webbshop utvecklad med Parcel och TypeScript. Projektet erbjuder ett användarvänligt och responsivt gränssnitt. ",
    tags: ["Parcel", "React", "Typescript", "Bootstrap"],
    imageURL: diamondsForYouImg,
    imageLargeURL: diamondsForYouLarge,
    url: "https://github.com/BruhJuze/Webbshop-grupp-5?",
  },
  {
    title: "Pancakes",
    description:
      "En bokningsapp för en fiktiv pannkaksrestaurang, utvecklad med React och TypeScript. Appen innehåller landningssida, bokningssida samt en adminsida.",
    tags: ["React", "Typescript", "styled components"],
    imageURL: pancakesImg,
    imageLargeURL: pancakesLarge,
    url: "https://github.com/ToveLissner/TheRestaurant?",
  },
  {
    title: "Movie App",
    description:
      "En webbapplikation som innehåller information om filmer och teveserier. ",
    tags: ["NextJS", "Typescript", "Tailwind CSS", "Material.UI"],
    imageURL: movieAppImg,
    imageLargeURL: movieAppLarge,
    url: "https://github.com/chrissilliw/movie-app",
  },
];
