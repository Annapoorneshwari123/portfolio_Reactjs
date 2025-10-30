import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2C3E50]/95 backdrop-blur-md border-b border-[#34495E] shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#home"
          className="font-mono text-3xl font-bold text-[#ECF0F1] hover:text-[#BDC3C7] transition-colors duration-200"
        >
          Annapoorneshwari M
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {["home", "about", "skills", "education", "projects", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-[#ECF0F1] hover:text-[#BDC3C7] text-lg font-medium transition-colors duration-200"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#ECF0F1] hover:text-[#BDC3C7] transition-colors duration-200 focus:outline-none"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#34495E] border-t border-[#2C3E50] shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            {["home", "about", "skills", "education", "projects", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-[#ECF0F1] hover:text-[#BDC3C7] font-medium transition-colors duration-200"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
