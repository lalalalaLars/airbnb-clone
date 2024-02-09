import { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import { navLinks, dropdownLinks } from "../../constants/constants";
import { MenuIcon, AccountCircleIcon } from "../../constants/icons";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <h1>LOGO</h1>
          </Link>
        </div>
        <div className="navLinks">
          {navLinks.map((link) => (
            <li key={link.id}>{link.title} </li>
          ))}
        </div>
        <div className="accountContainer">
          <div className="accountLinks">
            <h4>Airbnb din bolig</h4>
            <button onClick={toggleDropdown}>
              <MenuIcon className="menuIcon" />
              <AccountCircleIcon className="avatarIcon" />
            </button>
          </div>
          {showDropdown && (
            <div className="dropdownContent">
              {dropdownLinks.map((link) => (
                <a key={link.id} href="#">
                  {link.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
      <SearchBar />
    </div>
  );
};

export default Header;
