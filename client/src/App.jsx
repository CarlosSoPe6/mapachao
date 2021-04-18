import React from "react";

import "bootswatch/dist/sandstone/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";

const App = () => (
  <div>
    <Navbar />
    <Home />
  </div>
);

export default App;
