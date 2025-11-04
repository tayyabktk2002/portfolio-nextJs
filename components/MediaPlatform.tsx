import React from "react";
import { Linkedin, Github, Instagram } from "lucide-react";

const MediaPlatform = () => {
  return (
    <div className="flex justify-center gap-6 mt-10">
      <a
        href="https://www.linkedin.com/in/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-900 text-white rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md"
      >
        <Linkedin size={24} />
      </a>

      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-all duration-300 shadow-md"
      >
        <Github size={24} />
      </a>

      <a
        href="https://www.instagram.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-900 text-white rounded-full hover:bg-pink-600 transition-all duration-300 shadow-md"
      >
        <Instagram size={24} />
      </a>
    </div>
  );
};

export default MediaPlatform;
