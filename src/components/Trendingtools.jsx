import tools from "/src/data/tools.js";
import { useNavigate } from "react-router-dom";

const trendingTools = tools.filter((tool) => tool.featured);

function Trendingtools() {
  const getFavicon = (website) => {
    const domain = new URL(website).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  };
  const navigate = useNavigate();
  return (
    <section className="w-full py-12 px-6 md:px-12 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Trending Tools</h1>

        <div className="flex flex-wrap gap-6">
          {trendingTools.map((tool) => (
            <div
              onClick={() => navigate(`/tools/${tool.slug}`)}
              key={tool.id || tool.name}
              className="border border-gray-200 rounded-xl 
              p-6 shadow-sm  bg-white relative z-0  
              transition-all duration-300 cursor-pointer
              hover:scale-[1.02] hover:shadow-lg 
              hover:border-sky-500 hover:shadow-sky-200
              dark:hover:shadow-sky-900
              dark:bg-gray-800 dark:border-gray-700 
              dark:hover:border-sky-400 
              sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={getFavicon(tool.website)}
                  alt={`${tool.name} logo`}
                  className="w-12 h-12 rounded-md object-cover"
                />
                <div>
                  <h2 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {tool.name}
                  </h2>
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <span>{tool.category}</span>
                    <span>•</span>
                    <span className="font-medium text-sky-600 dark:text-sky-400">
                      {tool.pricing}
                    </span>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100 dark:border-gray-700 my-4" />

              <div className="des">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
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
