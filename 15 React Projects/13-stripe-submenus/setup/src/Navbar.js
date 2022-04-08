import React, { useContext } from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { StoreContext } from "./context";

const Navbar = () => {
  const { setSubLink, setDirection, setSidebar } = useContext(StoreContext);
  const handleLinkHover = (linkName, event) => {
    const linkRect = event.target.getBoundingClientRect();
    const direction = (linkRect.left + linkRect.right) / 2;
    setSubLink(linkName);
    setDirection(direction);
  };
  const handleHideSubmenu = (event) => {
    if (!event.target.classList.contains("link-btn")) setSubLink(null);
  };
  return (
    <div className="nav" onMouseOver={(event) => handleHideSubmenu(event)}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="btn toggle-btn" onClick={() => setSidebar(true)}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button
              className="link-btn"
              onMouseOver={(event) => handleLinkHover("products", event)}
            >
              products
            </button>
          </li>
          <li>
            <button
              className="link-btn"
              onMouseOver={(event) => handleLinkHover("developers", event)}
            >
              developers
            </button>
          </li>
          <li>
            <button
              className="link-btn"
              onMouseOver={(event) => handleLinkHover("company", event)}
            >
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
