import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Missions from "../pages/missions";
import Mars from "../pages/mars";
import About from "../pages/about";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <Missions />
        </Route>
        <Route exact path="/mars">
          <Mars />
        </Route>
        <Route exact path="/rockets"></Route>
        <Route exact path="/spaceships"></Route>
        <Route exact path="/about">
          <About />
        </Route>
      </BrowserRouter>
    </div>
  );
}
