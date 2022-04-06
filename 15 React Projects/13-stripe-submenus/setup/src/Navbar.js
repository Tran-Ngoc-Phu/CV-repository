import React, { useContext } from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { StoreContext } from "./context";

const Navbar = () => {
  const { setSubLink } = useContext(StoreContext);
  return (
    <div className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav-links">
          <li>
            <button
              className="link-btn"
              onMouseOver={() => setSubLink("products")}
            >
              products
            </button>
          </li>
          <li>
            <button
              className="link-btn"
              onMouseOver={() => setSubLink("developers")}
            >
              developers
            </button>
          </li>
          <li>
            <button
              className="link-btn"
              onMouseOver={() => setSubLink("company")}
            >
              company
            </button>
          </li>
        </ul>
        <button className="btn singin-btn">Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
