import tools from "/src/data/tools.js";
import { useNavigate } from "react-router-dom";

const trendingTools = tools.filter((tool) => tool.featured);

function Trendingtools() {
  const navigate = useNavigate();
  return (
    <section className="w-full py-12 px-6 md:px-12 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Trending Tools</h1>

        <div className="flex flex-wrap gap-6">
          {trendingTools.map((tool) => (
            <div
              onClick={() => navigate(`/tools/${tool.slug}`)}
              key={tool.id || tool.name}
              className="border border-gray-200 bg-white rounded-xl p-6 shadow-sm hover:scale-[1.02] hover:shadow-xl hover:border-sky-500 transition-all duration-300 ease-in-out cursor-pointersm:w-[calc(50%-12px)] 
              lg:w-[calc(33.33%-16px)]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={tool.image}
                  alt={`${tool.name} logo`}
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

              <div className="des">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trendingtools;
