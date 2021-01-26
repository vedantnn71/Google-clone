import React from "react";
import logo from "../assets/logo.png";
import "./Search.css";
import mic_img from "../assets/mic.svg";
import search_img from "../assets/search.svg";

const Search = () => {
  return (
    <div className="search__container">
      <img src={logo} alt="Google Logo" className="logo" />
      <div className="search__input">
        <input type="search" name="search" />
        <div className="input__images">
          <img src={search_img} alt="" className="image__left input__img" />
          <img src={mic_img} alt="" className="image__right input__img" />
        </div>
      </div>
      <div className="button__container">
        <button className="btn btn__gray btn__first">Google Search</button>
        <button className="btn btn__gray btn__second">Feeling Lucky</button>
        
      </div>
    </div>
  );
};

export default Search;
