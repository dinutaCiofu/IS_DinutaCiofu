// Navbar.tsx
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "./Navbar.css"; // Importul direct al fișierului CSS

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const showNavBar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };
  return (
    <header>
      <h3>Cinebook</h3>
      <nav ref={navRef}>
        <a href="/#">Program</a>
        <a href="/#">Movies</a>
        <a href="/#">My account</a>
        <a href="/#">Sign out</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
