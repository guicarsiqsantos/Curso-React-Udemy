import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home/home";
import About from "./pages/About/About";
import Navbar from "./Components/Navbar";
import Fotter from "./Components/Fotter";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
          <Fotter />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
