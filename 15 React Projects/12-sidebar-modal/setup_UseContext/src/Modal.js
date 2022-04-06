import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { StoreContext } from "./context";
const Modal = () => {
  const { openModal, setOpenModal } = useContext(StoreContext);
  return (
    <div className={openModal ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>Modal Content</h3>
        <FaTimes
          className="close-modal-btn"
          onClick={() => setOpenModal(false)}
        />
      </div>
    </div>
  );
};

export default Modal;
