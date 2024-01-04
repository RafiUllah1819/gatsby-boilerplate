import * as React from "react";
import "./layout.css";
import Header from "./header";

const Layout = ({ children }) => {

  return (
    <>
    <Header />
      <div className="main">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
