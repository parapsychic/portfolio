import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RespectEgg from "./components/RespectEgg";

export default function App() {
  return (
    <div className="bg-bg text-ink min-h-screen antialiased font-body">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-ink focus:text-bg focus:px-3 focus:py-2 focus:rounded font-semibold"
      >
        Skip to content
      </a>

      <Nav />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <RespectEgg />
    </div>
  );
}
