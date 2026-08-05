import Navbar from "../components/Navbar";
import tools from "/src/data/tools.js";
import { useParams } from "react-router-dom";

function Tooldetails() {
  const { slug } = useParams();
  const tool = tools.find((tool) => tool.slug === slug);
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-10 p-4">
        <div className="flex items-center">
          <img className="mr-8" src={tool.image} alt="AT tool Icon" />
          <div>
            <div className="flex items-center gap-4">
              <span className="text-5xl font-semibold">{tool.name}</span>
              <span className="mt-2 text-sky-400 bg-sky-100 px-2 py-1 rounded-lg">
                {tool.pricing}
              </span>
            </div>
            <p className="mt-2 text-gray-400">{tool.category}</p>
            <p className="my-4 text-gray-700">{tool.description}</p>
            <a
              className="text-white border border-sky-500 rounded-lg bg-sky-500 px-4 py-2 hover:bg-sky-600 hover:border-sky-600 transition"
              href={tool.website}
            >
              <i className="fa-solid fa-link "></i> Visit Website
            </a>
            <a
              className="text-sky-500 ml-3 rounded-lg border border-sky-500 px-8 py-2 hover:bg-sky-500 hover:text-white transition"
              href={tool.website}
            >
              <i className="fa-regular fa-bookmark"></i> Bookmark
            </a>
          </div>
        </div>
        <h1 className="text-4xl mt-10 mb-5 font-semibold">Features</h1>
        <ul>
          {tool.features.map((feature, index) => (
            <li key={index}><i className="mr-1 text-sky-500 fa-solid fa-play"></i> {feature}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Tooldetails;
