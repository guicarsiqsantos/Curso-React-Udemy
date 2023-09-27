import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/home";
import About from "./pages/About/About";
import Navbar from "./Components/Navbar";
import Fotter from "./Components/Fotter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Fotter />
      </BrowserRouter>
    </div>
  );
}

export default App;
