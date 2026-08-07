import { useNavigate } from "react-router-dom";
import robotIcon from "/src/assets/robot-tab-icon.png";
import DarkModeToggle from "./darkThemeButton";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-black sticky top-0 text-white flex items-center justify-between px-8 py-5 border-b border-gray-800 sticky top-0 z-50">
      <div className="brand flex items-center gap-3">
        <img
          src={robotIcon}
          alt="AI Tools Logo"
          className="w-8 h-8 cursor-pointer"
        />
        <h1 className="font-semibold text-xl cursor-pointer">
          AI Tools Directory
        </h1>
      </div>

      <div className="nav-links hidden md:flex gap-8">
        <a
          className="font-semibold hover:text-sky-500 transition"
          onClick={() => navigate("/")}
        >
          Home
        </a>
        <a
          className="font-semibold hover:text-sky-500 transition"
          onClick={() => navigate("/categories")}
        >
          Categories
        </a>
        <a
          className="font-semibold hover:text-sky-500 transition"
          onClick={() => navigate("/bookmarks")}
          href="#bookmarks"
        >
          Bookmarks
        </a>
        <a
          className="font-semibold hover:text-sky-500 transition"
          onClick={() => navigate("/about")}
          href="#about"
        >
          About
        </a>
      </div>

      <DarkModeToggle />
    </nav>
  );
}

export default Navbar;
