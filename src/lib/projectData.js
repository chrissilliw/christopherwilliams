import diamondsForYouImg from "/public/projects/diamondsForYou.jpg";
import workoutImg from "/public/projects/workout_app.png";
import movieAppImg from "/public/projects/movieApp.jpg";
import diamondsForYouLarge from "/public/projects/large/DiamondsForYou.jpg";
import workoutLarge from "/public/projects/large/workoutApp.png";
import movieAppLarge from "/public/projects/large/movieApp.jpg";
export const projectData = [
  {
    title: "Diamonds For You",
    description:
      "Diamond For You är en webbshop utvecklad med Parcel och TypeScript. Projektet erbjuder ett användarvänligt och responsivt gränssnitt. ",
    tags: ["Parcel", "React", "Typescript", "Bootstrap"],
    imageURL: diamondsForYouImg,
    imageLargeURL: diamondsForYouLarge,
    url: "https://github.com/chrissilliw/Webbshop-grupp-5",
  },
  {
    title: "Fitness App",
    description:
      "En träningsapp som du kan dokumentera dina övningar på. Projektet är utvecklat med en MERN-Stack struktur,",
    tags: [
      "React",
      "framer-moton",
      "Chakra UI",
      "Tailwind CSS",
      "Express",
      "MongoDB",
    ],
    imageURL: workoutImg,
    imageLargeURL: workoutLarge,
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
