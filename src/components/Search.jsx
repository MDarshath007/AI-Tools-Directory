import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (!searchValue.trim()) return;

    navigate(`/tools?search=${encodeURIComponent(searchValue)}`);
  };

  return (
    <div className="search-bar flex items-center pt-2 max-w-lg mx-auto">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Search AI tools..."
        className="placeholder-gray-500 rounded-l-xl bg-white shadow-sm border border-gray-200 text-black p-4 w-4/5 focus:outline-none"
      />

      <button
        onClick={handleSearch}
        className="bg-sky-500 text-white px-4 py-4 rounded-r-xl shadow-sm border border-sky-500 font-medium hover:bg-sky-600 transition cursor-pointer"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
