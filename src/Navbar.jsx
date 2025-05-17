import './main.css';
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="navbar">
        <div className="left">
          <h2 className="title">Portfolio</h2>
        </div>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" tabIndex={0} onKeyPress={(e) => { if(e.key === 'Enter') toggleMenu(); }}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className={`right ${menuOpen ? 'open' : ''}`}>
          <ScrollLink
            to="mainy"
            spy={true}
            smooth={true}
            offset={-140}
            duration={600}
            className="button"
            onClick={closeMenu}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="aboutMey"
            spy={true}
            smooth={true}
            offset={-140}
            duration={600}
            className="button"
            onClick={closeMenu}
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="work"
            spy={true}
            smooth={true}
            offset={-140}
            duration={600}
            className="button"
            onClick={closeMenu}
          >
            Work
          </ScrollLink>
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-140}
            duration={600}
            className="button"
            onClick={closeMenu}
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="project"
            spy={true}
            smooth={true}
            offset={-140}
            duration={600}
            className="button"
            onClick={closeMenu}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-140}
            duration={600}
            className="button"
            onClick={closeMenu}
          >
            Contact Me
          </ScrollLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
