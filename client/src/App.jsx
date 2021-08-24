import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import "@fortawesome/fontawesome-free/js/all.js";
import "bootswatch/dist/zephyr/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home/Home";
import UploadContainer from "./components/pages/Upload/UploadContainer";

const App = () => (
  <HashRouter>
    <Navbar />
    <div className="container mt-5">
      <Route exact path="/" component={Home} />
      <Route exact path="/upload" component={UploadContainer} />
    </div>
  </HashRouter>
);

export default App;
