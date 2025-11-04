"use client";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["about", "skills", "projects", "contact"];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/90 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12 text-white">
        {/* Logo */}
        <a
          href="#"
          className="text-xl md:text-2xl font-bold bg-white text-black px-4 py-2 rounded-full tracking-wide hover:tracking-wider transition-all duration-500"
        >
          Tayyab Khattak
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm md:text-base font-semibold uppercase tracking-wide">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="border border-transparent px-5 py-2 rounded-full transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Tayyab-Khattak-CV.pdf"
              download
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition-all duration-300"
            >
              <Download size={18} className="text-black" />
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-gray-800 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-20 left-1/2 -translate-x-1/2 bg-black text-white rounded-2xl shadow-lg py-5 px-8 flex flex-col items-center gap-4 text-base font-semibold uppercase tracking-wide md:hidden transition-all duration-300 z-40">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="border border-transparent px-5 py-2 rounded-full transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/TayyabKhattak_Resume.pdf"
              target="_blank"
              className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
