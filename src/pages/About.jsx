import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function About() {
  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mt-10 mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-5 text-center">About AI Tools Directory</h1>
        <p className="text-center">Our mission is to help people discover the best AI tools that can improve productivity, creativity and efficiency.</p>
        <div className="flex justify-between items-center my-10 flex-col md:flex-row p-4 sm:p-0">
            <img className="w-130" src="/src/assets/about-robot.png" alt="" />
            <div className="flex flex-col gap-4">
              <div className="flex items-center border border-gray-200 shadow-sm hover:shadow-md p-5 rounded-xl gap-5">
                <i className="text-5xl text-sky-500 fa-solid fa-magnifying-glass-chart"></i>
                <div>
                  <h1 className="text-2xl font-semibold">Curated Collection</h1>
                  <p className="text-gray-500 mt-1">We carefully curate and review the best AI tools from around the world.</p>
               </div>
              </div>
              <div className="flex items-center border border-gray-200 shadow-sm hover:shadow-md p-5 rounded-xl gap-5">
                <i className="text-5xl text-sky-500 fa-regular fa-clock"></i>
                <div>
                  <h1 className="text-2xl font-semibold">Updated Regularly</h1>
                  <p className="text-gray-500 mt-1">We update our directory regularly to ensure you have access to the latest tools.</p>
               </div>
              </div>
              <div className="flex items-center border border-gray-200 shadow-sm hover:shadow-md p-5 rounded-xl gap-5">
                <i className="text-4xl pr-1 text-sky-500 fa-solid fa-solid fa-users"></i>
                <div>
                  <h1 className="text-2xl font-semibold">Community Driven</h1>
                  <p className="text-gray-500 mt-1">Help us grow by submitting new tools and sharing feedback.</p>
               </div>
              </div>
            </div> 
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default About
