import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openSidebar } from "./feature/SidebarTrigger/sidebarTriggerSlice";
import { openModal } from "./feature/ModalTrigger/modalTriggerSlice";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <main>
      <FaBars
        className="sidebar-toggle"
        onClick={() => dispatch(openSidebar())}
      ></FaBars>
      <button className="btn" onClick={() => dispatch(openModal())}>
        show modal
      </button>
    </main>
  );
};

export default Home;
