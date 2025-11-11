"use client";

const particles = [
  { left: 15, top: 25, duration: 4.2, delay: 0.5 },
  { left: 85, top: 15, duration: 5.8, delay: 1.2 },
  { left: 45, top: 75, duration: 3.6, delay: 0.8 },
  { left: 75, top: 45, duration: 6.1, delay: 1.8 },
  { left: 25, top: 65, duration: 4.9, delay: 0.3 },
  { left: 65, top: 35, duration: 5.2, delay: 1.5 },
  { left: 35, top: 85, duration: 3.8, delay: 0.9 },
  { left: 95, top: 55, duration: 4.7, delay: 1.1 },
  { left: 5, top: 45, duration: 5.5, delay: 0.6 },
  { left: 55, top: 25, duration: 4.1, delay: 1.7 },
  { left: 80, top: 70, duration: 6.3, delay: 0.4 },
  { left: 20, top: 90, duration: 3.9, delay: 1.3 },
  { left: 70, top: 10, duration: 5.1, delay: 0.7 },
  { left: 40, top: 60, duration: 4.6, delay: 1.9 },
  { left: 90, top: 30, duration: 5.7, delay: 0.2 },
  { left: 10, top: 80, duration: 4.3, delay: 1.6 },
  { left: 60, top: 50, duration: 3.7, delay: 1.0 },
  { left: 30, top: 20, duration: 5.9, delay: 0.1 },
  { left: 85, top: 85, duration: 4.8, delay: 1.4 },
  { left: 50, top: 5, duration: 5.4, delay: 0.8 },
];

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black opacity-90" />

      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#0EA5E9] rounded-full opacity-30"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#0EA5E9] rounded-full opacity-10 blur-xl animate-pulse" />
      <div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#0EA5E9] rounded-full opacity-15 blur-2xl animate-bounce"
        style={{ animationDuration: "3s" }}
      />

      {/* Animated Lines */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-linear-to-b from-transparent via-[#0EA5E9] to-transparent opacity-20 animate-pulse" />
      <div
        className="absolute left-0 top-1/2 w-full h-px bg-linear-to-r from-transparent via-[#0EA5E9] to-transparent opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </div>
  );
};

const About = () => {
  return (
    <section className="relative py-20 px-6 bg-black text-white overflow-hidden" id="about">
      <AnimatedBackground />
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 data-aos="fade-down" className="text-4xl font-bold mb-4 tracking-tight uppercase">
            About <span className="text-[#0EA5E9]">Me</span>
          </h2>
          <div data-aos="fade-down" data-aos-delay="200" className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" className="order-2 md:order-1">
            <div className="xs:w-80 xs:h-80 w-full h-full mx-auto  rounded-2xl flex items-center justify-center">
              <div className="text-black text-6xl">
                <img src="/profile.png" alt="" className="rounded-2xl" />
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="order-1 md:order-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Who I Am</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I&rsquo;m a{" "}
                <b className="text-white font-semibold">
                  Full Stack Developer{" "}
                </b>
                passionate about creating digital solutions that make a
                difference.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                What I Build
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I focus on creating{" "}
                <span className="text-white font-semibold">clean UI</span>,
                <span className="text-white font-semibold">
                  scalable backend systems
                </span>
                , and{" "}
                <span className="text-white font-semibold">
                  smooth user experiences
                </span>
                .
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">My Mindset</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I love{" "}
                <span className="text-white font-semibold">
                  solving real-world problems with code{" "}
                </span>
                and believe in writing clean, maintainable solutions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Location</h3>
              <p className="text-gray-300 text-lg leading-relaxed flex items-center">
                <span className="mr-2">📍</span>
                <span className="text-white font-semibold">Islamabad, Pakistan</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div data-aos="fade-up" className="bg-white text-black p-8 rounded-2xl max-w-3xl mx-auto">
            <blockquote className="text-xl font-medium italic">
              &ldquo;I&rsquo;m a Full Stack Developer who focuses on creating
              clean UI, scalable backend systems, and smooth user experiences. I
              love solving real-world problems with code.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
