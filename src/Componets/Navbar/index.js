import React from "react";
import {FaSistrix} from "react-icons/fa";
import {FaGlobeAmericas} from "react-icons/fa";
import {BiSolidBell} from "react-icons/bi";
import {BsFillMoonFill} from "react-icons/bs";
import {BiExitFullscreen} from "react-icons/bi";
import {BiMessageAlt} from "react-icons/bi";
import "./Navbar.css";
function Nav() {
  return (
    <div className="header">
      <div className="search">
        <input type="search" placeholder="Search" />
        <FaSistrix className="icon-search" />
      </div>
      <div className="things">
        <div className="world">
          <FaGlobeAmericas />
          <span className="nameofworld">English</span>
        </div>
        <div className="ring">
          <BiSolidBell />
        </div>
        <div className="mode">
          <BsFillMoonFill />
        </div>{" "}
        <div className="message">
          <BiMessageAlt />
        </div>{" "}
        <div className="full">
          <BiExitFullscreen />
        </div>
        <div className="pic">
          <img src="./zaka.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
