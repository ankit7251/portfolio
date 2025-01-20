import About from "@/Components/Home/About";
import Hero from "@/Components/Home/Hero";
import Project from "@/Components/Home/Project";
import Header from "@/Components/shared/Header";
import Skills from "@/Components/Home/skills"

export default function Home() {
  return (
    <>
    <Header />
      <Hero />
      <About />
      <Skills />
      {/* <Project /> */}
    </>
  );
}
