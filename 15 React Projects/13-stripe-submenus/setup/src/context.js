import React, { useState, useContext } from "react";
import sublinks from "./data";
export const StoreContext = React.createContext(null);
export default ({ children }) => {
  const [subLinks, setSubLinks] = useState(null);
  const [direction, setDirection] = useState(null);
  const [sidebar, setSidebar] = useState(false);

  const store = {
    subLinks,
    setSubLink(page) {
      const neededSubLinks = sublinks.find((element) => element.page === page);
      return setSubLinks(neededSubLinks);
    },
    direction,
    setDirection,
    sidebar,
    setSidebar,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
