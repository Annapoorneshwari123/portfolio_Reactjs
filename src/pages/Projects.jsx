import React from "react";
import { Globe, Database, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Recipe Recommendation System",
    description:
      "A dynamic web application that integrates TheMealDB API to fetch real-time recipe data for meals, ingredients, and categories. Features smooth animations and clean iconography for enhanced user experience.",
    technologies: ["React.js", "Bootstrap", "Styled CSS", "TheMealDB API", "Axios"],
    features: [
      "Real-time recipe data integration using TheMealDB API",
      "HTTP requests handling with Axios for efficient API responses",
      "Scroll and card animations for enhanced UI interactivity",
      "Clean iconography using React Icons and Font Awesome",
      "Responsive design with Bootstrap and custom CSS",
    ],
    icon: <Globe className="h-6 w-6 text-[#2C3E50]" />,
    type: "Frontend Application",
    link: "https://recipe-recommend-project.vercel.app/",
  },
  {
    title: "Task Manager Application",
    description:
      "A full-stack MERN application with comprehensive task management features including user authentication, CRUD operations, and secure data storage with MongoDB integration.",
    technologies: ["React.js", "Express.js", "Node.js", "MongoDB", "JWT", "bcrypt"],
    features: [
      "User authentication with JWT and bcrypt for secure login/registration",
      "Complete CRUD operations for task management",
      "MongoDB database integration using Mongoose",
      "Clean and intuitive user interface design",
      "Secure data storage and retrieval system",
    ],
    icon: <Database className="h-6 w-6 text-[#2C3E50]" />,
    type: "Full Stack Application",
    link: "https://recipe-recommend-project.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#ECF0F1]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50]">
            Projects
          </h1>
          <div className="h-1 w-24 bg-[#34495E] mx-auto my-4 rounded"></div>
          <p className="text-[#7F8C8D] text-lg">
            Showcasing practical applications built with modern web technologies
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#F8F9FA] border border-[#D6DBDF] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6"
            >
              {/* Header Row */}
              <div className="flex justify-between items-start mb-5">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-[#D6DBDF] rounded-full">
                    {project.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-[#2C3E50] mb-1">
                      {project.title}
                    </h2>
                    <span className="text-xs text-[#34495E] bg-[#BDC3C7] px-2 py-1 rounded">
                      {project.type}
                    </span>
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm border border-[#2C3E50] text-[#2C3E50] px-3 py-1 rounded-md hover:bg-[#2C3E50] hover:text-white transition-colors duration-300"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </div>

              {/* Description */}
              <p className="text-[#34495E] mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-5">
                <h3 className="font-semibold text-[#2C3E50] mb-2">
                  Key Features:
                </h3>
                <ul className="list-disc pl-5 text-[#7F8C8D] space-y-1 text-sm">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="font-semibold text-[#2C3E50] mb-2">
                  Technologies:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#BDC3C7] text-[#2C3E50] text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
