import * as React from "react";
import "./layout.css";
import Header from "./header";

const Layout = ({pageTitle, children }) => {

  return (
    <>
    <Header />
      <div className="main">
        <h1>{pageTitle}</h1>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
