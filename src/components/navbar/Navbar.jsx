import { useState } from "react";

import "./Navbar.css";
import { logo, close, menu } from "../../assets";
import { navLinks } from "../../data";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <img src={logo} alt="hoobank" className="logo" />
      <ul>
        {navLinks.map((navLink, index) => (
          <li key={navLink.id}>
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>
      <div className="smallscreen">
        <img
          src={toggleMenu ? close : menu}
          alt="menu"
          className="menu"
          onClick={() => setToggleMenu((prev) => !prev)}
        />

        <div
          className="smallscren__links bg-black-gradient sidebar"
          style={toggleMenu ? { display: "flex" } : { display: "none" }}
        >
          <div className="mobile__links">
            {navLinks.map((navLink, index) => (
              <li key={navLink.id}>
                <a href={`#${navLink.id}`} onClick={() => setToggleMenu(false)}>
                  {navLink.title}
                </a>
              </li>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
