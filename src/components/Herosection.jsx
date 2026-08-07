import Search from "./Search";
import robotImage from "/src/assets/hero-page-robot.png"

function Herosection() {
  return (
    <section className="w-full bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
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

          <Search />
        </div>

        <div className="hero-design flex-1 flex justify-center">
          <img
            className="w-full max-w-md object-contain"
            src={robotImage}
            alt="AI Robot Hero"
          />
        </div>
      </div>
    </section>
  );
}

export default Herosection;
