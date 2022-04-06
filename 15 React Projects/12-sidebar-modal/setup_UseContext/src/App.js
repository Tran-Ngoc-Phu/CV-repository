import React from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import StoreProvider from "./context";

function App() {
  return (
    <StoreProvider>
      <Home />
      <Modal />
      <Sidebar />
    </StoreProvider>
  );
}

export default App;
