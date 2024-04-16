import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import HeaderSection from "@/components/HeaderSection";
import Projects from "@/components/Projects";
import SectionContainer from "@/components/SectionContainer";
import SectionContainerFullWidth from "@/components/SectionContainerFullWidth";
import SectionContainerWhite from "@/components/SectionContainerWhite";
import Skills from "@/components/Skills";
import Skills2 from "@/components/Skills2";

export default function Home() {
  return (
    <>
      <Header />
      <SectionContainerWhite>
        <About />
        <Skills2 />
      </SectionContainerWhite>
      <SectionContainerFullWidth>
        <Projects />
      </SectionContainerFullWidth>
      <SectionContainerWhite>
        <Contact />
      </SectionContainerWhite>
    </>
  );
}
