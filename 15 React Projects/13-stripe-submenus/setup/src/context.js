import React, { useState, useContext } from "react";
import sublinks from "./data";
export const StoreContext = React.createContext(null);
export default ({ children }) => {
  const [subLinks, setSubLinks] = useState(null);

  const store = {
    subLinks,
    setSubLink(order) {
      const neededSubLinks = sublinks.find((element) => element.page === order);
      return setSubLinks(neededSubLinks);
    },
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
