import Navbar from "../components/Navbar";
import Search from "../components/Search";
import tools from "../data/tools";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SearchResult() {
  const getFavicon = (website) => {
    const domain = new URL(website).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  };
  const navigate = useNavigate();
  let filteredTools = tools;
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category && category !== "All Tools") {
    filteredTools = tools.filter((tool) => tool.category === category);
  }
  if (search) {
    filteredTools = tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.category.toLowerCase().includes(search.toLowerCase()) ||
        tool.description.toLowerCase().includes(search.toLowerCase()),
    );
  }
  filteredTools.map((tool) => console.log(tool.slug));
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen py-12 px-6 md:px-12 bg-gray-50 text-gray-900 dark:bg-gray-900">
        <Search />
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 mt-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => navigate(`/tools/${tool.slug}`)}
              className="border border-gray-200 bg-white w-full 
            rounded-xl p-6 shadow-sm
            hover:shadow-sky-200
            hover:scale-[1.02] hover:shadow-lg hover:border-sky-500 transition-all duration-300 cursor-pointer
            dark:hover:shadow-sky-900
            dark:bg-gray-800 dark:border-gray-900"
            >
              <div className="flex items-center gap-4 pb-2">
                <img
                  src={getFavicon(tool.website)}
                  alt={tool.name}
                  className="w-12 h-12 rounded-md object-cover"
                />
                <div>
                  <h2 className="font-semibold text-lg dark:text-white">
                    {tool.name}
                  </h2>
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <span>{tool.category}</span>
                    <span>•</span>
                    <span className="font-medium text-sky-500">
                      {tool.pricing}
                    </span>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100 dark:border-gray-700 my-2" />
              <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-400">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default SearchResult;
