import Navbar from "../components/Navbar";
import tools from "../data/tools";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const categoryIconMap = {
    "All Tools": "fa-solid fa-boxes-stacked",
    Writing: "fa-solid fa-pen-nib",
    "Image Generation": "fa-solid fa-image",
    Coding: "fa-solid fa-code",
    Video: "fa-solid fa-video",
    "Audio & Speech": "fa-solid fa-waveform",
    Productivity: "fa-solid fa-bolt",
    Marketing: "fa-solid fa-bullhorn",
    SEO: "fa-solid fa-magnifying-glass",
    "Search Engine": "fa-brands fa-searchengin",
    "AI Assistant": "fa-solid fa-robot",
    "Image Generator": "fa-regular fa-image",
    Design: "fa-solid fa-wand-magic-sparkles",
    Voice: "fa-solid fa-microphone",
    Music: "fa-solid fa-music",
    Presentation: "fa-solid fa-file-powerpoint",
    Automation: "fa-solid fa-gears",
    Translation: "fa-solid fa-language",
    Education: "fa-solid fa-graduation-cap",
    "Customer Support": "fa-solid fa-headset",
    Entertainment: "fa-solid fa-photo-film",
  };

  const categoryColorMap = {
    "All Tools": { bg: "bg-sky-50", text: "text-sky-500" },
    Writing: { bg: "bg-emerald-50", text: "text-emerald-500" },
    "Image Generation": { bg: "bg-rose-50", text: "text-rose-500" },
    Coding: { bg: "bg-blue-50", text: "text-blue-500" },
    Video: { bg: "bg-amber-50", text: "text-amber-500" },
    "Audio & Speech": { bg: "bg-purple-50", text: "text-purple-500" },
    Productivity: { bg: "bg-pink-50", text: "text-pink-500" },
    Marketing: { bg: "bg-orange-50", text: "text-orange-500" },
    SEO: { bg: "bg-indigo-50", text: "text-indigo-500" },
    "Search Engine": { bg: "bg-cyan-50", text: "text-cyan-500" },
    "AI Assistant": { bg: "bg-violet-50", text: "text-violet-500" },
    "Image Generator": { bg: "bg-fuchsia-50", text: "text-fuchsia-500" },
    Design: { bg: "bg-teal-50", text: "text-teal-500" },
    Voice: { bg: "bg-red-50", text: "text-red-500" },
    Music: { bg: "bg-purple-50", text: "text-purple-500" },
    Presentation: { bg: "bg-yellow-50", text: "text-yellow-600" },
    Automation: { bg: "bg-lime-50", text: "text-lime-600" },
    Translation: { bg: "bg-sky-50", text: "text-sky-500" },
    Education: { bg: "bg-indigo-50", text: "text-indigo-500" },
    "Customer Support": { bg: "bg-emerald-50", text: "text-emerald-500" },
    Entertainment: { bg: "bg-pink-50", text: "text-pink-500" },
  };

  const DEFAULT_ICON = "fa-solid fa-folder-open";
  const DEFAULT_COLORS = { bg: "bg-sky-50", text: "text-sky-500" };

  const categoryCounts = tools.reduce((acc, tool) => {
    if (tool.category) {
      acc[tool.category] = (acc[tool.category] || 0) + 1;
    }
    return acc;
  }, {});

  const categoriesList = [
    {
      name: "All Tools",
      count: tools.length,
      icon: categoryIconMap["All Tools"],
      colors: categoryColorMap["All Tools"],
    },
    ...Object.keys(categoryCounts).map((categoryName) => ({
      name: categoryName,
      count: categoryCounts[categoryName],
      icon: categoryIconMap[categoryName] || DEFAULT_ICON,
      colors: categoryColorMap[categoryName] || DEFAULT_COLORS,
    })),
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col dark:bg-gray-900 transition duration-300">
      <Navbar />

      <main className="flex-grow w-full py-10 px-4 sm:px-8 md:px-12">
        <section className="max-w-7xl mx-auto">
          <div className="mb-8 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-2 dark:text-white">
              Browse By Categories
            </h1>
            <p className="text-gray-500 text-base sm:text-lg dark:text-gray-400">
              Explore AI tools by category and find the perfect one for your
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriesList.map((category, index) => (
              <div
                key={index}
                onClick={() =>
                  navigate(
                    `/tools?category=${encodeURIComponent(category.name)}`,
                  )
                }
                className="border border-gray-200 bg-white rounded-xl p-6 shadow-sm 
                           hover:scale-[1.02] hover:shadow-lg hover:shadow-sky-200 hover:border-sky-500 
                           transition-all duration-300 ease-in-out cursor-pointer 
                           flex flex-col items-center justify-center gap-3 group
                           dark:bg-gray-800 dark:border-gray-700 
                           dark:hover:shadow-sky-900 transition duration-300"
              >
                <div
                  className={`p-4 ${category.colors.bg} rounded-full transition-transform duration-200 group-hover:scale-110`}
                >
                  <i
                    className={`${category.icon} ${category.colors.text} text-3xl`}
                  ></i>
                </div>
                <h2 className="font-semibold text-xl text-gray-800 text-center dark:text-white">
                  {category.name}
                </h2>
                <span className="text-sm font-medium text-sky-500 bg-gray-100 px-3 py-1 rounded-full dark:bg-sky-900">
                  {category.count} {category.count === 1 ? "Tool" : "Tools"}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Categories;
