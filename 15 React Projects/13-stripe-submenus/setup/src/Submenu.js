import React, { useState, useRef, useEffect, useContext } from "react";
import { StoreContext } from "./context";

const Submenu = () => {
  const { subLinks } = useContext(StoreContext);
  const page = subLinks?.page;
  let classNameSubMenu = "";
  switch (page) {
    case "products":
      classNameSubMenu = "submenu-center col-3";
      break;
    case "developers":
      classNameSubMenu = "submenu-center col-4";
      break;
    case "company":
      classNameSubMenu = "submenu-center col-2";
      break;
    default:
      classNameSubMenu = "";
  }
  console.log(classNameSubMenu);
  return (
    <div className={subLinks ? "submenu show" : "submenu"}>
      <h4>{page}</h4>
      <div className={classNameSubMenu}>
        {subLinks?.links.map((link) => (
          <a href={link.url}>
            {link.icon} {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Submenu;
