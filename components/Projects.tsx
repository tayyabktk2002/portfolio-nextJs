"use client";
import { useState } from "react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("freelance");

  const teamProjects = [
    {
      title: "NewsHunt",
      image: "projects/newshunt.png",
      hoverImage: "projects/hover/newshunt.svg",
      link: "https://newshunt.io/",
      company: "Next Generation Circle PVT limited Peshawar, Pakistan",
    },
    {
      title: "AUSC(Admission University, School, College)",
      image: "projects/ausc.png",
      hoverImage: "projects/hover/ausc.svg",
      link: "https://ausc.com.pk/",
      company: "Next Generation Circle PVT limited Peshawar, Pakistan",
    },
  ];

  const freelanceProjects = [
    {
      title: "IAP(Industrialists Association Peshawar)",
      image: "projects/iap.png",
      hoverImage: "projects/hover/iap.svg",
      link: "https://www.iapeshawar.com/",
      company: "Freelance",
    },
    {
      title: "VANIX",
      image: "projects/vanix.png",
      hoverImage: "projects/hover/vanix.png",
      link: "https://vanix-teal.vercel.app/",
      company: "Freelance",
    },
    {
      title: "Story Plus",
      image: "projects/storyplus.png",
      hoverImage: "projects/hover/story.png",
      link: "https://story-pulse-omega.vercel.app/",
      company: "Freelance",
    },
  ];

  const currentProjects =
    activeTab === "freelance" ? freelanceProjects : teamProjects;

  return (
    <section className="py-20 px-6 bg-black text-white" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 data-aos="fade-down" className="text-3xl font-bold mb-8 tracking-tight uppercase">
            My <span className="text-[#0EA5E9]">Projects</span>
          </h2>
          <div data-aos="fade-down" data-aos-delay="200" className="w-24 h-1 bg-white mx-auto mb-8"></div>

          {/* Tabs */}
          <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center mb-8">
            <div className="bg-gray-800 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab("freelance")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === "freelance"
                    ? "bg-[#0EA5E9] text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Freelance
              </button>
              <button
                onClick={() => setActiveTab("team")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === "team"
                    ? "bg-[#0EA5E9] text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Team Collaborative
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="group relative bg-white text-black rounded-lg overflow-hidden shadow-2xl hover:shadow-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-video bg-gray-100 overflow-hidden relative">
                <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-gray-500 text-sm font-medium">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.hoverImage}
                    alt={`${project.title} hover`}
                    className="w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                <h3 className="text-sm font-normal mb-3 group-hover:text-gray-600 transition-colors">
                  {project?.company}
                </h3>
                <div className="flex items-center justify-between">
                  <a
                    href={project.link}
                    className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors group/btn"
                  >
                    View Project
                    <svg
                      className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-black transition-colors"></div>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-lg transition-colors pointer-events-none"></div>

              {/* Hover indicator */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
