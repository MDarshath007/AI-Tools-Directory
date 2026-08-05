function Herosection() {
  return (
    <section className="w-full bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* Left Text Content */}
        <div className="sub-hero flex-1 space-y-4">
          <h1 className="font-semibold text-4xl sm:text-5xl leading-tight">
            Discover the Best <br />
            <span className="text-sky-500">AI Tools</span> <br />
            To Supercharge Your Work
          </h1>
          
          <p className="text-gray-300 max-w-xl text-lg leading-relaxed">
            Find the best AI tools for productivity, creativity, coding,
            marketing, and more. Save time and do more with AI.
          </p>

          {/* Search Bar */}
          <div className="search-bar flex items-center pt-2 max-w-lg">
            <input 
              type="text" 
              className="placeholder-gray-500 rounded-l-xl bg-white text-black p-4 w-4/5 focus:outline-none" 
              placeholder="Search AI tools..."
            />
            <button className="bg-sky-500 text-white w-1/5 p-4 rounded-r-xl font-medium hover:bg-sky-600 transition cursor-pointer">
              Search
            </button>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="hero-design flex-1 flex justify-center">
          <img
            className="w-full max-w-md object-contain"
            src="/src/assets/hero-page-robot.png"
            alt="AI Robot Hero"
          />
        </div>

      </div>
    </section>
  );
}

export default Herosection;