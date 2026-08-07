import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Bookmarks() {
  const getFavicon = (website) => {
    const domain = new URL(website).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  };
  const navigate = useNavigate();
  const [bookMarks, setBookMarks] = useState(() => {
    return JSON.parse(localStorage.getItem("bookMarks")) || [];
  });

  // Handling Delete Button with Event Propagation Fix
  const handleDelete = (e, id) => {
    e.stopPropagation(); // Prevents navigate() from triggering when deleting
    const updatedBookMarks = bookMarks.filter((tool) => tool.id !== id);
    setBookMarks(updatedBookMarks);
    localStorage.setItem("bookMarks", JSON.stringify(updatedBookMarks));
  };

  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen h-auto py-12 px-6 md:px-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Bookmarks</h1>

          <div className="flex flex-col gap-4">
            {bookMarks.length === 0 ? (
              <div className="text-center py-16 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
                <i className="fa-regular fa-bookmark text-4xl text-gray-400 mb-3 block"></i>
                <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
                  No bookmarks available
                </p>
                <button
                  onClick={() => navigate("/")}
                  className="mt-4 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-lg transition"
                >
                  Explore Tools
                </button>
              </div>
            ) : (
              bookMarks.map((tool) => (
                <div
                  key={tool.id}
                  onClick={() => navigate(`/tools/${tool.slug}`)}
                  className="border border-gray-200 bg-white
                  rounded-xl p-6 shadow-sm cursor-pointer w-full
                  dark:border-gray-700 dark:bg-gray-800  
                  dark:hover:border-sky-500 duration-300
                  dark:hover:shadow-sky-900 hover:scale-[1.02]
                  hover:shadow-lg hover:border-sky-500 
                  hover:shadow-sky-200 transition "
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={getFavicon(tool.website)}
                        alt={tool.name}
                        className="w-12 h-12 rounded-md object-cover bg-gray-100 dark:bg-gray-700"
                      />
                      <div>
                        <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                          {tool.name}
                        </h2>
                        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mt-1">
                          <span>{tool.category}</span>
                          <span>•</span>
                          <span className="font-medium text-sky-600 dark:text-sky-400">
                            {tool.pricing}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      className="text-white rounded-lg 
                      bg-red-600 px-4 py-2 transition
                      hover:bg-red-700 transition cursor-pointer 
                      flex items-center justify-center shrink-0"
                      onClick={(e) => handleDelete(e, tool.id)}
                      title="Remove Bookmark"
                    >
                      <i className="fa-regular fa-trash-can "></i>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Bookmarks;
