import { useState } from "react";
import Navbar from "../components/Navbar";
import tools from "/src/data/tools.js";
import { useParams } from "react-router-dom";

function Tooldetails() {
  const { slug } = useParams();
  const tool = tools.find((t) => t.slug === slug);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Early return fallback if tool isn't found
  if (!tool) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900">
          <p className="text-xl font-semibold">Tool not found.</p>
        </div>
      </>
    );
  }

  const handleBookmark = () => {
    const bookMarks = JSON.parse(localStorage.getItem("bookMarks")) || [];
    const exist = bookMarks.some((b) => b.id === tool.id);

    if (!exist) {
      bookMarks.push(tool);
      localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
      setIsBookmarked(true);
    }
  };

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-gray-50 text-gray-900 py-8 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
          
          {/* Main Hero Header */}
          <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-6 lg:gap-8">
            {/* Tool Icon */}
            <img 
              className="w-24 h-24 md:w-32 md:h-32 rounded-xl border border-gray-200 object-contain p-2 bg-white flex-shrink-0 shadow-sm" 
              src={tool.image} 
              alt={`${tool.name} icon`} 
            />

            {/* Tool Content Details */}
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                  {tool.name}
                </h1>
                <span className="inline-block text-xs font-semibold text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full uppercase tracking-wider">
                  {tool.pricing}
                </span>
              </div>

              <p className="mt-1 text-sm font-medium text-sky-500">{tool.category}</p>
              <p className="mt-4 text-gray-600 leading-relaxed text-base">{tool.description}</p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white bg-sky-500 hover:bg-sky-600 border border-transparent rounded-lg px-6 py-2.5 font-medium transition duration-200 shadow-sm"
                  href={tool.website}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i> Visit Website
                </a>
                
                <button
                  type="button"
                  onClick={handleBookmark}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-6 py-2.5 font-medium border transition duration-200 ${
                    isBookmarked
                      ? "bg-sky-50 border-sky-300 text-sky-600"
                      : "border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white"
                  }`}
                >
                  <i className={`${isBookmarked ? "fa-solid" : "fa-regular"} fa-bookmark`}></i>
                  {isBookmarked ? "Bookmarked" : "Bookmark"}
                </button>
              </div>
            </div>
          </div>

          <hr className="my-8 border-gray-100" />

          {/* Features List Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tool.features?.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                  <i className="fa-solid fa-circle-check text-sky-500 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700 text-sm leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </main>
    </>
  );
}

export default Tooldetails;