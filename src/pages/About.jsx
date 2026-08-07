import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <section
        className="w-full min-h-screen h-auto py-12 px-6 
        md:px-12 bg-gray-50 dark:bg-gray-900 text-gray-900 
        dark:text-gray-100 transition-colors duration-300"
      >
        <div className="max-w-7xl mt-10 mx-auto dark:bg-gray-900">
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 text-center">
            About AI Tools Directory
          </h1>
          <p className="text-center text-gray-500 dark:text-gray-400">
            Our mission is to help people discover the best AI tools that can
            improve productivity, creativity and efficiency.
          </p>
          <div className="flex justify-between items-center my-10 flex-col md:flex-row p-4 sm:p-0">
            <img className="w-130" src="/src/assets/about-robot.png" alt="" />
            <div className="flex flex-col gap-4">
              <div
                className="flex items-center border gap-5
                border-gray-200 shadow-sm p-5 rounded-xl  
                dark:bg-gray-800 dark:border-gray-700 
                dark:hover:shadow-sky-900 transition duration-300
                hover:scale-[1.02] hover:shadow-lg 
                hover:shadow-sky-200 hover:border-sky-500"
              >
                <i className="text-5xl text-sky-500 fa-solid fa-magnifying-glass-chart"></i>
                <div>
                  <h1 className="text-2xl font-semibold">Curated Collection</h1>
                  <p className="text-gray-500 mt-1 dark:text-gray-400">
                    We carefully curate and review the best AI tools from around
                    the world.
                  </p>
                </div>
              </div>
              <div
                className="flex items-center border gap-5
                border-gray-200 shadow-sm p-5 rounded-xl  
                dark:bg-gray-800 dark:border-gray-700 
                dark:hover:shadow-sky-900 transition duration-300
                hover:scale-[1.02] hover:shadow-lg 
                hover:shadow-sky-200 hover:border-sky-500"
              >
                <i className="text-5xl text-sky-500 fa-regular fa-clock"></i>
                <div>
                  <h1 className="text-2xl font-semibold">Updated Regularly</h1>
                  <p className="text-gray-500 mt-1 dark:text-gray-400">
                    We update our directory regularly to ensure you have access
                    to the latest tools.
                  </p>
                </div>
              </div>
              <div
                className="flex items-center border gap-5
                border-gray-200 shadow-sm p-5 rounded-xl  
                dark:bg-gray-800 dark:border-gray-700 
                dark:hover:shadow-sky-900 transition duration-300
                hover:scale-[1.02] hover:shadow-lg 
                hover:shadow-sky-200 hover:border-sky-500"
              >
                <i className="text-4xl pr-1 text-sky-500 fa-solid fa-solid fa-users"></i>
                <div>
                  <h1 className="text-2xl font-semibold">Community Driven</h1>
                  <p className="text-gray-500 mt-1 dark:text-gray-400">
                    Help us grow by submitting new tools and sharing feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default About;
