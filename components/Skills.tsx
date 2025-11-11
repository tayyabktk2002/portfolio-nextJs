import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "🌐", category: "Frontend" },
    { name: "CSS", icon: "🎨", category: "Frontend" },
    { name: "JavaScript", icon: "⚡", category: "Frontend" },
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "React Native", icon: "⚛️📱", category: "Frontend" },
    { name: "Next.js", icon: "▲", category: "Frontend" },
    { name: "Angular", icon: "🅰️", category: "Frontend" },
    { name: "Tailwind", icon: "💨", category: "Frontend" },
    { name: "Bootstrap", icon: "🅱️", category: "Frontend" },
    { name: "Material UI", icon: "🎯", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Express", icon: "🚀", category: "Backend" },
    { name: "MySQL", icon: "🗂️", category: "DB" },
    { name: "MongoDB", icon: "📂", category: "DB" },
  ];

  const frontendSkills = skills.filter(
    (skill) => skill.category === "Frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "Backend");
  const db = skills.filter((skill) => skill.category === "DB");

  return (
    <section className="py-20 px-6 bg-white text-black" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 tracking-tight">
            Technical <span className="text-[#0EA5E9]">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Full Stack Developer • Frontend & Backend
          </p>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        {/* Frontend Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-black">Frontend</span>{" "}
            <span className="text-gray-400">Development</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {frontendSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-black text-white rounded-2xl p-8 hover:bg-gray-900 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-700 ease-out">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-300">
                    {skill.name}
                  </h4>
                </div>

                {/* Hover overlay */}
                <div className="absolute flex justify-center items-center inset-0 bg-linear-to-br from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="text-center">
                    <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-700 ease-out">
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-300">
                      {"."}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-black">Backend</span>{" "}
            <span className="text-gray-400">Development</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {backendSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-black text-white rounded-2xl p-8 hover:bg-gray-900 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500 ease-out">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-300">
                    {skill.name}
                  </h4>
                </div>

                {/* Hover overlay */}
                <div className="absolute flex justify-center items-center inset-0 bg-linear-to-br from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-700 ease-out">
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-300">
                      {"."}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-black">DataBase</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {db.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-black text-white rounded-2xl p-8 hover:bg-gray-900 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500 ease-out">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-300">
                    {skill.name}
                  </h4>
                </div>

                {/* Hover overlay */}
                <div className="absolute flex justify-center items-center inset-0 bg-linear-to-br from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-700 ease-out">
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-300">
                      {"."}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Stack Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full text-lg font-semibold">
            <span className="mr-3">💻</span>
            Full Stack Developer
            <span className="ml-3">🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
