import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Tooldetails from "./pages/Tooldetails.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/tools/:slug" element={<Tooldetails />}/>
    </Routes>
    </>
  )
}

export default App
