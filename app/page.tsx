import About from "@/Components/Home/About";
import Hero from "@/Components/Home/Hero";
// import Project from "@/Components/Home/Project";
import Skills from "@/Components/Home/skills";
import Header from "@/Components/shared/Header";
import MouseAnimation from "@/Components/shared/MouseAnimation";

export default function Home() {
  return (
    <>
        <MouseAnimation />

      <Header />
      <Hero />
      <About />
      <Skills />
      {/* <Project /> */}
    </>
  );
}
