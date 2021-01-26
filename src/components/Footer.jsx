import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="top__container">
          <a href="#" className="footer__link">
            India
          </a>
        </div>
        <div className="bottom__container">
          <div className="left__container">
            <a href="#" className="footer__link">
              Advertising
            </a>
            <a href="#" className="footer__link">
              Business
            </a>
            <a href="#" className="footer__link">
              About
            </a>
            <a href="#" className="footer__link">
              How Search works
            </a>
          </div>
          <div className="right__container">
            <a href="#" className="footer__link">
              Privacy
            </a>
            <a href="#" className="footer__link">
              Terms
            </a>
            <a href="#" className="footer__link">
              Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
