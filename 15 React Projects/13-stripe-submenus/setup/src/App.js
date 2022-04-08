import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import StoreProvider from "./context";

function App() {
  return (
    <StoreProvider>
      <Navbar></Navbar>
      <Hero></Hero>
      <Submenu></Submenu>
      <Sidebar />
    </StoreProvider>
  );
}

export default App;
