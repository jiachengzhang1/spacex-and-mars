import React from "react";
import Missions from "./Missions";
import { BrowserRouter, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Mars from "./Mars";
import About from "./About";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <NavigationBar />
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
