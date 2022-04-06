import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { StoreContext } from "./context";

const Home = () => {
  const { setOpenModal, setOpenSidebar } = useContext(StoreContext);
  return (
    <main>
      <FaBars
        className="sidebar-toggle"
        onClick={() => {
          setOpenSidebar(true);
        }}
      ></FaBars>
      <button
        className="btn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        show modal
      </button>
    </main>
  );
};

export default Home;
