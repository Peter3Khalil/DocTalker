"use client";
import React from "react";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const mode = useSelector((state) => state.theme.mode);
  // ToDo : Make User change fonts and colors
  return (
    <div className={mode} id="mainContainer">
      {children}
    </div>
  );
};

export default Layout;
