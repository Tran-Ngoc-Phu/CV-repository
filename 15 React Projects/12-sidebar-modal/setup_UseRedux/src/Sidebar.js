import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useSelector, useDispatch } from "react-redux";
import { closeSideBar } from "./feature/SidebarTrigger/sidebarTriggerSlice";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebarTrigger.value);
  const dispatch = useDispatch();

  return (
    <div className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="logo"></img>
        <FaTimes
          className="close-btn"
          onClick={() => dispatch(closeSideBar())}
        />
      </div>
      <div className="links">
        {links.map((link) => (
          <a key={link.id} href={link.url}>
            {link.icon} {link.text}
          </a>
        ))}
      </div>
      <div className="social-icons">
        {social.map((element) => (
          <a key={element.id} href={element.url}>
            {element.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
