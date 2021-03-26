import { Head } from "next/document";
import { AboutMe } from "../components/AboutMe";
import { Apresentation } from "../components/Apresentation";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";
import { Techs } from "../components/Techs";

export default function Home() {
  return (
    <>
      <div className="bg-gray-100">
        <Header />
        <Apresentation />
        <AboutMe />
        <Projects />
        <Techs />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
