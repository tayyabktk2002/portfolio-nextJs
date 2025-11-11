"use client";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "My Projects", href: "#projects" },
    { name: "About Me", href: "#about" },
    { name: "What i do", href: "#whatdo" },
    { name: "My Skills", href: "#skills" },
    { name: "My Experiences", href: "#experiences" },
    { name: "Let's Connect", href: "#contact" },
  ];
  

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-transparent">
      <nav className=" flex items-center justify-between py-6 px-8">
        <a
          href="#"
          className="text-2xl font-extrabold hover:tracking-wider duration-500 p-1 bg-white text-black  rounded-full font-serif "
        >
          <img src="/favicon.png" alt="LOGO" className="w-16 h-16"/>
        </a>

        {!isOpen && (
          <button
            className="flex items-center justify-center text-black p-2 rounded-md hover:bg-white/40 transition bg-white"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={42} />
          </button>
        )}
      </nav>

      <div
        className={`fixed inset-0 bg-white text-black flex flex-col justify-center items-center gap-8 text-lg font-semibold tracking-wide transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute top-9 right-8 p-2 max-w-7xl m-auto bg-white">
          <button
            className=" text-black hover:opacity-70 transition"
            onClick={() => setIsOpen(false)}
          >
            <X size={42} />
          </button>
        </div>

        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="hover:text-gray-500 transition-all duration-300 font-serif"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}

        <div className="mt-10 text-center text-gray-600 text-sm uppercase tracking-wider">
          <p className="mb-2">Connect</p>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:tayyabktk2002@gmail.com"
              className="block text-black font-bold hover:text-gray-600"
            >
              Email: tayyabktk2002@gmail.com
            </a>
            <a
              href="https://github.com/tayyabktk2002"
              target="_blank"
              className="block text-black font-bold hover:text-gray-600"
            >
              Github: tayyabktk2002
            </a>
          </div>
        </div>

        <a
          href="/Tayyab-Khattak-CV.pdf"
          download
          className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 mt-8"
        >
          <Download size={18} />
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Navbar;
