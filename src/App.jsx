import React from "react";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NavBar from "./sections/NavBar";
import Footer from "./sections/footer";

const App = () => {
  return (
    <div className="font-sans bg-blue-950 text-gray-500 scroll-smooth">
      {/* Navbar */}
      <NavBar/>

      {/* Main Content */}
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default App;