import React from 'react'

const WhatDo = () => {
  const fullStackServices = [
    'Building responsive website front end using React, Angular and React-native',
    'Integrate and work with databases, like MongoDB, PostgreSQL and MySql for data storage and retrieval.',
    'Work collaboratively with cross-functional teams, including frontend developers, backend developers, and designers.',
    'Creating application backend in Node & Express'
  ]

  const backendServices = [
    'Designing and developing RESTful APIs and GraphQL endpoints',
    'Database architecture and optimization with MongoDB, PostgreSQL, and MySQL',
    'Server-side logic implementation using Node.js and Express',
    'Authentication, authorization, and security best practices'
  ]

  const frontendServices = [
    'Building modern, responsive UIs with React, Next.js, and TypeScript',
    'State management using Redux and Context API',
    'Performance optimization and code splitting techniques',
    'Cross-browser compatibility and accessibility standards'
  ]

  return (
    <section id="whatdo" className=" bg-black relative overflow-hidden pt-10">
      <h1 className='uppercase text-center text-5xl text-white font-bold'>what i do?</h1>
      <div className="absolute inset-0 bg-linear-to-r from-[#0470a1] to-[#075477] opacity-20 blur-3xl"></div>
      <div className="absolute inset-0 bg-linear-to-r from-[#0470a1] to-[#075477] opacity-20 blur-3xl"></div>
      <div className="absolute inset-0 bg-linear-to-r from-[#0470a1] to-[#075477] opacity-20 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-32 py-20 px-6">
        {/* Full Stack Development */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/whatdo/full.jpg" alt="Full Stack Development" className="w-full rounded-lg" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Full Stack Development
            </h2>
            <div className="space-y-6">
              {fullStackServices.map((service, index) => (
                <div key={index} className="flex gap-3 group">
                  <span className="text-[#0EA5E9] text-xl mt-1 group-hover:scale-125 transition-transform">⚡</span>
                  <p className="text-gray-300 leading-relaxed">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Backend Development */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <img src="/whatdo/backend.jpg" alt="Backend Development" className="w-full rounded-lg" />
          </div>
          <div className="md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Backend Development
            </h2>
            <div className="space-y-6">
              {backendServices.map((service, index) => (
                <div key={index} className="flex gap-3 group">
                  <span className="text-[#0EA5E9] text-xl mt-1 group-hover:scale-125 transition-transform">⚡</span>
                  <p className="text-gray-300 leading-relaxed">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Frontend Development */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/whatdo/front.jpg" alt="Frontend Development" className="w-full rounded-lg" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Frontend Development
            </h2>
            <div className="space-y-6">
              {frontendServices.map((service, index) => (
                <div key={index} className="flex gap-3 group">
                  <span className="text-[#0EA5E9] text-xl mt-1 group-hover:scale-125 transition-transform">⚡</span>
                  <p className="text-gray-300 leading-relaxed">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatDo