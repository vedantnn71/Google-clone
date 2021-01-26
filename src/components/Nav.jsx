import React from "react";
import app_img from "../assets/apps.svg";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      {/* <div className="links"> */}
      <div className="first__links">
        <a href="https://www.mail.google.com" className="text__link">
          Gmail
        </a>
        <a href="#" className="text__link">
          Images
        </a>
      </div>
      <div className="second__links">
        <a href="#">
          <img src={app_img} alt="app image" className="app__img" />
        </a>
        <button className="btn">Sign Up</button>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Nav;
