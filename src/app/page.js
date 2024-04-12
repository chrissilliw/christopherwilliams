import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import HeaderSection from "@/components/HeaderSection";
import Projects from "@/components/Projects";
import SectionContainer from "@/components/SectionContainer";
import SectionContainerWhite from "@/components/SectionContainerWhite";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <SectionContainerWhite>
        <About />
        <Skills />
      </SectionContainerWhite>
      <SectionContainer>
        <Projects />
      </SectionContainer>
      <SectionContainerWhite>
        <Contact />
      </SectionContainerWhite>
    </>
  );
}
