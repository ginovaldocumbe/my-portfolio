import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
