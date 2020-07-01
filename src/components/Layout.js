import "../styles/index.scss";
import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
