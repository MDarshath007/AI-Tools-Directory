import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Tooldetails from "./pages/Tooldetails.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import Categories from "./pages/Categories.jsx";
import Searchresult from "./pages/SearchResult.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/tools/:slug" element={<Tooldetails />}/>
      <Route path="/bookmarks" element={<Bookmarks />}/>
      <Route path="/categories" element={<Categories />}/>
      <Route path="/tools" element={<Searchresult />}/>
    </Routes>
    </>
  )
}

export default App
