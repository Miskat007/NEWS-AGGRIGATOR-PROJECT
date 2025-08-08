import React from "react";
import "./Header.css"; // We'll add simple styles

const Header: React.FC = () => {
  return (
    <header className="navbar">
      <h1>News Portal</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
