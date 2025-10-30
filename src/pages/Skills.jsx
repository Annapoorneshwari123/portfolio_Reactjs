import React from "react";
import { Code, Database, Lightbulb, Settings } from "lucide-react";

function Skills() {
  const skillsCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6 text-[#2C3E50]" />,
      skills: ["JavaScript", "Python (Basic)", "MySQL"],
    },
    {
      title: "Technologies",
      icon: <Database className="h-6 w-6 text-[#2C3E50]" />,
      skills: ["React.js", "Express.js", "MongoDB", "Mongoose", "Node.js"],
    },
    {
      title: "Tools",
      icon: <Settings className="h-6 w-6 text-[#2C3E50]" />,
      skills: ["Git", "GitHub", "VS Code", "NPM"],
    },
    {
      title: "Concepts",
      icon: <Lightbulb className="h-6 w-6 text-[#2C3E50]" />,
      skills: [
        "CRUD Operations",
        "MVC",
        "RESTful API",
        "Authentication & Authorization",
        "Routing",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#ECF0F1]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
          Technical Skills
        </h2>
        <div className="w-24 h-1 bg-[#34495E] mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#F8F9FA] hover:bg-[#EAECEE] transition duration-300 rounded-xl shadow-sm border border-[#D5D8DC] p-6 text-left"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 bg-[#D6DBDF] rounded-full">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#2C3E50]">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="list-disc list-inside space-y-2 text-[#34495E] font-medium">
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
