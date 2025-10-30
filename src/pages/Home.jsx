import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { LuLinkedin } from "react-icons/lu";
import { personalInfo } from "../data";

const Home = () => {
  const handleClick = (type, value) => {
    switch (type) {
      case "email":
        window.location.href = `mailto:${value}`;
        break;
      case "phone":
        window.location.href = `tel:${value}`;
        break;
      case "linkedin":
        window.open(`https://linkedin.com/in/${value}`, "_blank");
        break;
      case "github":
        window.open(`https://${value}`, "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <section
      id="About"
      className="flex flex-col items-center justify-center min-h-screen bg-[#ECF0F1] text-center px-6"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-[#2C3E50] mb-3"
      >
        {personalInfo.name}
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "6rem" }}
        transition={{ duration: 0.8 }}
        className="h-1 bg-[#34495E] mx-auto mb-5 rounded-full"
      ></motion.div>

      {/* Title and Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-2xl text-[#34495E] font-medium mb-2"
      >
        {personalInfo.title}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-[#7F8C8D] text-lg max-w-2xl mb-8"
      >
        {personalInfo.subtitle}
      </motion.p>

      {/* Summary */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="text-[#2C3E50] max-w-3xl leading-relaxed mb-10"
      >
        A motivated BCA graduate (2024) with MERN stack training and
        hands-on experience in building responsive, user-friendly web
        applications. Skilled in frontend/backend development, RESTful
        APIs, and database integration.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-4 mb-10"
      >
        <button
          onClick={() =>
            handleClick("email", "annapoornaparipooorna@gmail.com")
          }
          className="flex items-center gap-2 bg-gradient-to-r from-[#2C3E50] to-[#34495E] text-[#ECF0F1] px-6 py-2 rounded-md font-medium hover:opacity-90 transition duration-300"
        >
          <Mail className="w-5 h-5" /> Email Me
        </button>

        <button
          onClick={() => handleClick("phone", "9900379635")}
          className="flex items-center gap-2 border-2 border-[#34495E] text-[#34495E] px-6 py-2 rounded-md font-medium hover:bg-[#34495E] hover:text-[#ECF0F1] transition duration-300"
        >
          <Phone className="w-5 h-5" /> Call Me
        </button>

        <button
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="flex items-center gap-2 bg-[#2C3E50] text-[#ECF0F1] px-6 py-2 rounded-md font-medium hover:bg-[#34495E] transition duration-300"
        >
          View Projects
        </button>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="flex justify-center gap-8"
      >
        <button
          onClick={() =>
            handleClick("github", "github.com/Annapoorneshwari123")
          }
          className="p-3 border border-[#2C3E50] rounded-full text-[#2C3E50] hover:bg-[#2C3E50] hover:text-[#ECF0F1] transition duration-300"
        >
          <SiGithub size={22} />
        </button>

        <button
          onClick={() =>
            handleClick("linkedin", "annapoorneshwari-m-187334298")
          }
          className="p-3 border border-[#34495E] rounded-full text-[#34495E] hover:bg-[#34495E] hover:text-[#ECF0F1] transition duration-300"
        >
          <LuLinkedin size={22} />
        </button>
      </motion.div>
    </section>
  );
};

export default Home;
