import { useState } from "react";
import { useNavigate } from "react-router-dom";
import robotIcon from "/src/assets/robot-tab-icon.png";
import DarkModeToggle from "./darkThemeButton";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close mobile menu on navigate
  };

  return (
    <nav className="bg-black sticky top-0 text-white border-b border-gray-800 z-50">
      <div className="flex items-center justify-between px-6 py-4 md:px-8 md:py-5">
        {/* Brand Logo & Title */}
        <div 
          className="brand flex items-center gap-3 cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          <img
            src={robotIcon}
            alt="AI Tools Logo"
            className="w-8 h-8"
          />
          <h1 className="font-semibold text-xl">
            AI Tools Directory
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links hidden md:flex items-center gap-8">
          <a
            className="font-semibold hover:text-sky-500 transition cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            Home
          </a>
          <a
            className="font-semibold hover:text-sky-500 transition cursor-pointer"
            onClick={() => handleNavigation("/categories")}
          >
            Categories
          </a>
          <a
            className="font-semibold hover:text-sky-500 transition cursor-pointer"
            onClick={() => handleNavigation("/bookmarks")}
          >
            Bookmarks
          </a>
          <a
            className="font-semibold hover:text-sky-500 transition cursor-pointer"
            onClick={() => handleNavigation("/about")}
          >
            About
          </a>
        </div>
        <div className="hidden md:flex">
          <DarkModeToggle />
          </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="flex items-center gap-4 md:hidden transition duration-300">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                // Close (X) Icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger Icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
           <DarkModeToggle />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-950 border-b border-gray-800 px-6 py-4 space-y-4 transition duration-300">
          <a
            className="block font-semibold hover:text-sky-500 transition cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            Home
          </a>
          <a
            className="block font-semibold hover:text-sky-500 transition cursor-pointer"
            onClick={() => handleNavigation("/categories")}
          >
            Categories
          </a>
          <a
            className="block font-semibold hover:text-sky-500 transition cursor-pointer"
            onClick={() => handleNavigation("/bookmarks")}
          >
            Bookmarks
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;