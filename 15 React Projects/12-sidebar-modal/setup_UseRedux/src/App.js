import React from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { store } from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <section className="section">
      <Provider store={store}>
        <Home />
        <Sidebar />
        <Modal />
      </Provider>
    </section>
  );
}

export default App;
