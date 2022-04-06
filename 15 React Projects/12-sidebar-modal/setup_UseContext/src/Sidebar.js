import React, { useContext } from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { StoreContext } from "./context";

const Sidebar = () => {
  const { openSidebar, setOpenSidebar } = useContext(StoreContext);
  return (
    <div className={openSidebar ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <FaTimes className="close-btn" onClick={() => setOpenSidebar(false)} />
      </div>
      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>
              {link.icon} {link.text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="social-icons">
        {social.map((data) => (
          <li key={data.id}>
            <a href={data.url}>{data.icon}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
