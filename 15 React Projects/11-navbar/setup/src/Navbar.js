import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linkRef = useRef(null);
  const linkContainerRef = useRef(null);
  const handleSetToggle = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    const heightLinks = linkRef.current.getBoundingClientRect().height;
    if (
      heightLinks !== linkContainerRef.current.getBoundingClientRect().height
    ) {
      linkContainerRef.current.style.height = `${heightLinks}px`;
    } else {
      linkContainerRef.current.style.height = `0px`;
    }
  });
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt={logo} />
          <FaBars className="nav-toggle" onClick={handleSetToggle} />
        </div>
        <div className="links-container" ref={linkContainerRef}>
          <ul className="links" ref={linkRef}>
            {links.map((link) => (
              <a href={link.url} key={link.id}>
                {link.text}
              </a>
            ))}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((element) => (
            <a key={element.id} href={element.url}>
              {element.icon}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
