import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "BCA (Computer Application)",
    institution: "Ramanashree Academy Of Management, Bengaluru",
    duration: "2021 - 2024",
    grade: "CGPA: 8.61",
    type: "Bachelor's Degree",
  },
  {
    id: 2,
    degree: "II PUC (Commerce)",
    institution: "Sarada Vilas PU College, Mysore",
    duration: "2019 - 2020",
    grade: "Percentage: 85.5%",
    type: "Pre-University",
  },
  {
    id: 3,
    degree: "SSLC",
    institution: "ST Thomas High School, Mysore",
    duration: "2017 - 2018",
    grade: "Percentage: 78%",
    type: "Secondary School",
  },
];

function Education() {
  return (
    <section id="education" className="py-20 bg-[#ECF0F1]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50]">
            Education
          </h1>
          <div className="h-1 w-24 bg-[#34495E] mx-auto my-4 rounded"></div>
          <p className="text-[#7F8C8D] text-lg">
            Academic foundation and learning journey
          </p>
        </div>

        {/* Education List */}
        <div className="flex flex-col items-center space-y-8">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-3/4 lg:w-2/3 bg-[#F8F9FA] border border-[#D6DBDF] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6"
            >
              {/* Top Row */}
              <div className="flex justify-between items-start flex-wrap mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#D6DBDF] rounded-full">
                    <GraduationCap className="h-6 w-6 text-[#2C3E50]" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-[#2C3E50]">
                      {item.degree}
                    </h2>
                    <span className="text-xs text-[#34495E] bg-[#BDC3C7] px-2 py-1 rounded mt-1 inline-block">
                      {item.type}
                    </span>
                  </div>
                </div>

                <div className="flex items-center text-[#7F8C8D] text-sm mt-3 md:mt-0">
                  <Calendar className="h-4 w-4 mr-2 text-[#2C3E50]" />
                  {item.duration}
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex justify-between items-center flex-wrap border-t border-[#D6DBDF] pt-4">
                <p className="text-[#34495E] font-medium">{item.institution}</p>
                <span className="bg-[#2C3E50] text-white px-3 py-1 rounded text-sm font-semibold mt-2 md:mt-0">
                  {item.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
