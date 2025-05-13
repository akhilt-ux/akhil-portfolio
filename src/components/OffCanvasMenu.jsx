import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OffCanvasMenu.css";

const OffCanvasMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`offcanvas-menu ${open ? "open" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>
          ×
        </button>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={toggleMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/experience" onClick={toggleMenu}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/certifications" onClick={toggleMenu}>
              Certifications
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default OffCanvasMenu;
