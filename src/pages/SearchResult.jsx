import Navbar from "../components/Navbar";
import Search from "../components/Search";
import tools from "../data/tools";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SearchResult() {
  const navigate = useNavigate();
  let filteredTools = tools;
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) {
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
      <section className="w-full h-full py-12 px-6 md:px-12 bg-gray-50 text-gray-900">
        <Search />
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 mt-6">
          {filteredTools.map((tool) => (
            <div className="border border-gray-200 bg-white w-full rounded-xl p-6 shadow-sm hover:scale-[1.02] hover:shadow-xl hover:border-sky-500 transition-all duration-300 cursor-pointer">
              <div
                className="flex items-center gap-4"
                onClick={(()=>navigate(`/tools/${tool.slug}`))}
              >
                <img
                  src={tool.image}
                  alt={tool.name}
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

              <p className="text-gray-600 text-sm leading-relaxed">
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
