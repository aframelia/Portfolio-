// import React, { useState } from "react";
// import './nav.css'

// export default function Nav() {
//   // Toggle state to show or hide the mobile menu
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen); // Toggle the menu
//   };
//     return (
//     <nav className="navbar">
//       <div className="logo">
//         <h2>AfraMelia</h2>
//       </div>

//       {/* Hamburger icon */}
//       <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

//       {/* Menu items */}
//       <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#myprojects">My Projects</a></li>
//       </ul>
//     </nav>
//     )
// }
import React, { useState } from "react";
import { Link } from 'react-router-dom'; // For page navigation
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling to sections
import './nav.css'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>AfraMelia</h2>
      </div>

      {/* Hamburger icon */}
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Menu items */}
      <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
        {/* Link to Home Page */}
        <li>
          <Link to="/">Home</Link>
        </li>
        
        {/* Scroll to sections using react-scroll */}
        <li>
          <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="myprojects" smooth={true} duration={500}>
            My Projects
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}
