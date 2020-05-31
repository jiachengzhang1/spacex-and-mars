import React from "react";
import Missions from "./Missions";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Mars from "./Mars";
import About from "./About";

const App = () => {
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
};

export default App;
