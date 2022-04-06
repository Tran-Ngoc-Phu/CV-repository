import React from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "./feature/ModalTrigger/modalTriggerSlice";

const Modal = () => {
  const isOpen = useSelector((state) => state.modalTrigger.value);
  const dispatch = useDispatch();

  return (
    <div className={isOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <FaTimes
          className="close-modal-btn"
          onClick={() => dispatch(closeModal())}
        />
        <h3>Modal Content</h3>
      </div>
    </div>
  );
};

export default Modal;
