import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { StoreContext } from "./context";

const Sidebar = () => {
  const { sidebar, setSidebar } = useContext(StoreContext);

  return (
    <div className={sidebar ? "sidebar-wrapper show" : "sidebar-wrapper"}>
      <div className="sidebar">
        <FaTimes
          className="close-btn"
          onClick={() => {
            console.log(sidebar);
            setSidebar(!sidebar);
          }}
        />

        {sublinks.map((data, indexData) => (
          <article key={indexData}>
            <h4>{data.page}</h4>
            <ul className="sidebar-sublinks">
              {data.links.map((link, indexLink) => (
                <li key={indexLink}>
                  <a href={link.url}>
                    {link.icon} {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
