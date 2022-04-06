import React, { useState, useContext } from "react";
export const StoreContext = React.createContext(null);

export default ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const store = {
    openModal,
    setOpenModal,
    openSidebar,
    setOpenSidebar,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
