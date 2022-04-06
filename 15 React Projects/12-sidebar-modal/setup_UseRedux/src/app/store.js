import { configureStore } from "@reduxjs/toolkit";
import sidebarTriggerReducer from "../feature/SidebarTrigger/sidebarTriggerSlice";
import modalTriggerReducer from "../feature/ModalTrigger/modalTriggerSlice";

export const store = configureStore({
  reducer: {
    sidebarTrigger: sidebarTriggerReducer,
    modalTrigger: modalTriggerReducer,
  },
});
