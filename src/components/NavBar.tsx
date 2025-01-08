import React from "react";
import ThemeChange from "./ThemeChange";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Hairstyle</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#c1">Home</a>
          </li>
          <li>
            <a href="#c2">Contact</a>
          </li>
          <li>
            <a href="#c3">About</a>
          </li>
          <li>
            <a href="#c4">Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
