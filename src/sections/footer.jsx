import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Footer=()=>{
return (
    <footer className="bg-[#2C3E50] text-[#BDC3C7] py-12 px-6">
      <div className="max-w-9xl mx-auto grid md:grid-cols-3 gap-12 border-b border-[#34495E] pb-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-[#ECF0F1] tracking-wider">
            ANNAPOORNESHWARI M
          </h2>
          <p className="text-[#BDC3C7] text-lg leading-relaxed">
            MERN Stack Developer passionate about creating innovative web
            solutions and delivering exceptional user experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#ECF0F1] tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2 text-[#BDC3C7] text-lg">
            <li>
              <a
                href="#home"
                className="hover:text-[#ECF0F1] transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-[#ECF0F1] transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-[#ECF0F1] transition-colors duration-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#ECF0F1] transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#ECF0F1] tracking-wide">
            Get In Touch
          </h3>
          <ul className="space-y-2 text-[#BDC3C7] text-lg">
            <li>annapoornaparipoorna@gmail.com</li>
            <li>+91 9900379635</li>
            <li>Bengaluru, India</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="border border-[#34495E] rounded-full p-3 hover:bg-[#ECF0F1] hover:text-[#2C3E50] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="border border-[#34495E] rounded-full p-3 hover:bg-[#ECF0F1] hover:text-[#2C3E50] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:annapoornaparipoorna@gmail.com"
              className="border border-[#34495E] rounded-full p-3 hover:bg-[#ECF0F1] hover:text-[#2C3E50] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="max-w-9xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 text-[#BDC3C7] text-lg">
        <p className="mb-3 md:mb-0">
          © 2025 Annapoorneshwari M. Made with{" "}
          <span className="text-red-500">♥</span> and React.js
        </p>
        <a
          href="#top"
          className="border border-[#34495E] px-4 py-2 rounded-md hover:bg-[#ECF0F1] hover:text-[#2C3E50] transition-colors"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
 