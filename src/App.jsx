import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import FreeChart from "./pages/FreeChart";

function App() {
  return (
    <div className="min-h-screen p-6 bg-[#fceee4] text-[#1a1a1a] font-sans">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/free-chart" element={<FreeChart />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
