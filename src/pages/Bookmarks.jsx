import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Bookmarks() {
  const navigate = useNavigate();
  const [bookMarks, setBookMarks] = useState(() => {
    return JSON.parse(localStorage.getItem("bookMarks")) || [];
  });

  //   Handling Delete Button

  const handleDelete = (id) => {
    const updatedBookMarks = bookMarks.filter((tool) => tool.id !== id);
    setBookMarks(updatedBookMarks);
    localStorage.setItem("bookMarks", JSON.stringify(updatedBookMarks));
  };

  console.log(bookMarks);
  return (
    <>
      <Navbar />
      <section className="w-full h-screen py-12 px-6 md:px-12 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Bookmarks</h1>

          <div className="flex flex-wrap gap-6">
            {bookMarks.map((tool) => (
              <div
                className="card cursor-pointer 
              border border-gray-200 bg-white 
              rounded-lg flex flex-col justify-between 
              gap-3 shadow-sm hover:shadow-md transition 
              p-5 w-full"
              >
                <div
                  className="flex items-center gap-4"
                  onClick={() => navigate(`/tools/${tool.slug}`)}
                >
                  <img
                    src={tool.image}
                    className="w-12 h-12 rounded-md object-cover"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{tool.name}</h2>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span>{tool.category}</span>
                      <span>•</span>
                      <span className="font-medium text-sky-600">
                        {tool.pricing}
                      </span>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-100 my-1" />

                <div className="des flex items-center justify-between">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                  <button
                    className="text-white rounded-lg bg-red-600 
              px-4 py-2 hover:bg-red-700 transition"
                    onClick={() => handleDelete(tool.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Bookmarks;
