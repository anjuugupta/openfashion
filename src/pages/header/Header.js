import React from "react";
import "./header.css";

//import Icons
import menu from "../../assets/Menu.png";
import logo from "../../assets/Group.png";
import search from "../../assets/Search.png";
import shopping from "../../assets/shoppingbag.png"


export const Header = () => {
  return (
    <div className="navbar">
      <div className="nav-icon">
      <img src={menu} alt="menu icons" className="menu"/>
      <img src={logo} alt="logo" className="openfashion"/>
     <div className="searchingAndShopping">
      <img src={search} alt="search icons" className="search"/>
      <img src={shopping} alt="shopping icons" className="shopping"/>
      </div>
      </div>
    </div>
  );
};
