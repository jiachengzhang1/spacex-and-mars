import "../assets/scss/styles.scss";
import React from "react";
import Header from "./Header";

import News from "../pages/News";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";
import Mars from "../pages/Mars";

const App = () => {
    return (
        <Router>
            <Header />
            <div className="container">
                <div className="main-layout">
                    <Route exact path="/">
                        <Home />
                    </Route>
                    {/* <Route exact path="/starlink">
                        <Starlink />
                    </Route> */}
                    <Route exact path="/mars">
                        <Mars />
                    </Route>
                    <Route exact path="/news">
                        <News />
                    </Route>
                </div>
            </div>
        </Router>
    );
};

export default App;
