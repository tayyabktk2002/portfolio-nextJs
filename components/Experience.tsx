import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Next Generation Circle Pvt. Ltd.",
      location: "Peshawar",
      duration: "1.5 Years (Current)",
      type: "Full-time",
      description: "Developing both frontend and backend solutions"
    },
    {
      title: "Frontend Developer",
      company: "ExtendsTech",
      location: "Peshawar",
      duration: "Previous Role",
      type: "Full-time",
      description: "Focused on frontend development and user interfaces"
    },
    {
      title: "Backend Developer Intern",
      company: "Company Name",
      location: "Islamabad",
      duration: "4 Months",
      type: "Internship",
      description: "Backend development and server-side technologies"
    },
    {
      title: "Frontend Developer Intern",
      company: "Company Name",
      location: "Islamabad",
      duration: "6 Months",
      type: "Internship",
      description: "Frontend development and web technologies"
    }
  ];

  return (
    <section className="py-20 px-6 bg-black text-white" id='experiences'>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight uppercase">
            Work <span className="text-[#0EA5E9]">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gray-700"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0EA5E9] rounded-full border-4 border-black z-10"></div>
                
                {/* Content */}
                <div className={`w-5/12 bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#0EA5E9]/30 transition-colors ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span className="text-sm px-3 py-1 bg-[#0EA5E9]/20 text-[#0EA5E9] rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-lg font-semibold text-gray-300">{exp.company}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>📍 {exp.location}</span>
                      <span>⏱️ {exp.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience