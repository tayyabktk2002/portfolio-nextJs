"use client";
const particles = [
  { left: 20, top: 30, duration: 5.1, delay: 0.3 },
  { left: 80, top: 20, duration: 4.8, delay: 1.1 },
  { left: 60, top: 70, duration: 5.5, delay: 0.7 },
  { left: 30, top: 80, duration: 4.2, delay: 1.6 },
  { left: 90, top: 50, duration: 6.0, delay: 0.9 },
  { left: 10, top: 60, duration: 4.7, delay: 1.3 },
  { left: 70, top: 15, duration: 5.3, delay: 0.5 },
  { left: 40, top: 90, duration: 4.9, delay: 1.8 },
  { left: 85, top: 75, duration: 5.7, delay: 0.2 },
  { left: 15, top: 45, duration: 4.4, delay: 1.4 },
];

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black opacity-90" />

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

      <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-[#0EA5E9] rounded-full opacity-10 blur-xl animate-pulse" />
      <div
        className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-[#0EA5E9] rounded-full opacity-15 blur-2xl animate-bounce"
        style={{ animationDuration: "4s" }}
      />
    </div>
  );
};

const Contact = () => {
  return (
    <section
      className="relative py-20 px-6 bg-black text-white overflow-hidden"
      id="contact"
    >
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
          <h2 className="text-4xl font-bold mb-4 tracking-tight uppercase">
            Get In <span className="text-[#0EA5E9]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ready to bring your ideas to life? I&apos;d love to hear about
                your project and discuss how we can work together.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📧</span>
                <span className="text-white font-semibold">
                  tayyabktk2002@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📱</span>
                <span className="text-white font-semibold">
                  +92 349 5336214
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📍</span>
                <span className="text-white font-semibold">
                  Islamabad, Pakistan
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <form
              className="space-y-6"
              action="https://formspree.io/f/mbjnqvlv"
              method="POST"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Username or Email
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#0EA5E9] focus:outline-none transition-colors"
                  placeholder="Enter your username or email"
                  name="Email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#0EA5E9] focus:outline-none transition-colors"
                  placeholder="Enter your contact number"
                  name="Contact No"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Note
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#0EA5E9] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or message..."
                  name="Note"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0EA5E9] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0EA5E9]/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:ring-offset-2 focus:ring-offset-black"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
