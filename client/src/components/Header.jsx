import React, { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const ToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];
  return (
    <>
      <header className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto fixed top-0 right-0 left-0 ">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-2 text-primary"
            >
              <span>Programer</span>
            </a>

            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <a key={link} href={path} className="block hover:text-gray-400">
                  {link}
                </a>
              ))}
            </ul>
          </div>

          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <GrLanguage className="mr-3" /> Language
            </a>
            <button
              className="bg-secondary py-2 px-4 transition-all duration-300 rounded
                 hover:text-white hover:bg-indigo-600"
            >
              Sign up
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={ToggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {menuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${
          menuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <a key={link} href={path} className="block hover:text-gray-400">
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Header;