import React, { useState } from "react";
import images from "../../constants/image";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a className="" href="#home">
            Home
          </a>
        </li>
        <li className="p__opensans">
          <a className="" href="#about">
            About
          </a>
        </li>
        <li className="p__opensans">
          <a className="" href="#menu">
            Menu
          </a>
        </li>
        <li className="p__opensans">
          <a className="" href="#awards">
            Awards
          </a>
        </li>
        <li className="p__opensans">
          <a className="" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div />
        <a href="" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen-overlay">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a className="" href="#home">
                  Home
                </a>
              </li>
              <li className="p__opensans">
                <a className="" href="#about">
                  About
                </a>
              </li>
              <li className="p__opensans">
                <a className="" href="#menu">
                  Menu
                </a>
              </li>
              <li className="p__opensans">
                <a className="" href="#awards">
                  Awards
                </a>
              </li>
              <li className="p__opensans">
                <a className="" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
