// components/Header.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="main-header">
      <Link to="/sukoon-villa" className="logo">StikkmanUX</Link>

      <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
        <a>Projects</a>
        <a>Careers</a>
        <a>Services</a>
        <a>Contact Us</a>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Optional: dark background overlay when nav is open */}
      {menuOpen && <div className="nav-backdrop" onClick={toggleMenu}></div>}
    </header>
  );
}
