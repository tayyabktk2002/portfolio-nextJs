"use client";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Download } from "lucide-react";
import MediaPlatform from "./MediaPlatform";

const Hero = () => {
  const [rotation, setRotation] = useState(0);
  
  const images = [
    "/css.png",
    "/github.png",
    "/mysql.png",
    "/react.png",
    "/tailwind.png",
    "/html.png",
    "/node.png",
    "/js.png",
    "/next.png",
  ];

  const handleRotate = () => {
    setRotation(prev => prev + 120);
  };

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row mt-20 md:mt-0">
      <div className="relative bg-white w-full md:w-1/2 flex justify-center items-center p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden order-1 md:order-2">
        <div className="absolute inset-0">
          <div className="animate-dots opacity-60"></div>
        </div>

        <div className="relative z-10 w-96 h-96" data-aos="zoom-in">
          <style jsx>{`
            .auto-rotate {
              animation: autoSpin 30s linear infinite;
            }
            @keyframes autoSpin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
          <div className="auto-rotate relative w-full h-full">
            <div 
              className="relative w-full h-full cursor-pointer transition-transform duration-1000"
              style={{ transform: `rotate(${rotation}deg)` }}
              onClick={handleRotate}
            >            
            {/* Lines connecting images */}
            {images.map((_, index) => (
              <div 
                key={index}
                className="absolute top-1/2 left-1/2 w-40 h-0.5 bg-gray-400 transform -translate-y-1/2 origin-left"
                style={{ transform: `rotate(${index * 40}deg)` }}
              ></div>
            ))}
            
            {/* Images positioned in circle */}
            {images.map((image, index) => {
              const angle = index * 40; 
              const radius = 160; 
              const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
              const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
              
              return (
                <div 
                  key={index}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(${x}px, ${y}px) rotate(-${rotation}deg)`
                  }}
                >
                  <img
                    src={image}
                    alt={`Tech ${index + 1}`}
                    className="w-20 h-20 rounded-full object-cover shadow-lg bg-white p-1"
                  />
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white flex flex-col justify-center items-start w-full md:w-1/2 p-8 sm:p-12 md:p-16 lg:p-20 order-2 md:order-1">
        <h1 data-aos="fade-right" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 uppercase font-serif mt-26">
          I am <br />
          <span className="text-[#0EA5E9]">
            <Typewriter
              words={["Frontend", "Backend", "Full Stack"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span> <br />
          Developer
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10 leading-relaxed text-justify">
          I like to craft solid and scalable full-stack web products
          <br className="hidden sm:block" />
          with great user experiences and modern design. Passionate about
          turning ideas into functional, high-performing applications that make
          an impact. <br />
          Always exploring new technologies to deliver clean, efficient, and
          maintainable solutions.
        </p>

        <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold text-center hover:bg-gray-200 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-[#0EA5E9] px-6 py-3 rounded-full font-semibold text-center hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href="/Tayyab-Khattak-CV.pdf"
            download
            className="border border-[#0EA5E9] px-6 py-3 rounded-full font-semibold text-center hover:bg-white hover:text-black transition-all duration-300 flex gap-2"
          >
            <Download size={18} />
            <span> Download CV</span>
          </a>
        </div>
        <div data-aos="fade-up" data-aos-delay="600" className="">
          <MediaPlatform />
        </div>
      </div>
    </section>
  );
};

export default Hero;
