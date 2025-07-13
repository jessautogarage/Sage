import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-xl font-bold">BODYGRAPH CHART</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/free-chart">Free Chart</Link>
        <Link to="/pricing">Pricing</Link>
      </nav>
    </header>
  );
};

export default Header;
