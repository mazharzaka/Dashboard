import React, {useState} from "react";
import "./Side.css";
import {BiMenuAltLeft} from "react-icons/bi";
import {FaPlus} from "react-icons/fa";
import {FaChartPie} from "react-icons/fa";
import {FaImages, FaFilePdf} from "react-icons/fa";
import {CiMicrophoneOn} from "react-icons/ci";
import {FaMinus} from "react-icons/fa";
import {FaUserAlt} from "react-icons/fa";
import {BsMegaphoneFill} from "react-icons/bs";
import {BsFillMoonFill} from "react-icons/bs";
import {BiCrop} from "react-icons/bi";
import {BsTruck} from "react-icons/bs";
import {AiOutlineCalendar} from "react-icons/ai";
import {BiSolidMagicWand, BiSun} from "react-icons/bi";
import {FaStar} from "react-icons/fa";
import {FiLogOut} from "react-icons/fi";
import {FiUser} from "react-icons/fi";
import {Link} from "react-router-dom";

function Sidebar() {
  const [side, setside] = useState(false);
  const [show, setshow] = useState(false);
  const [dark, setdark] = useState(true);

  const bar = () => {
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");
    const Image = document.querySelector(".Image-contain");
    if (side) {
      sidebar.classList.remove("active");
      content.classList.remove("active");
    } else {
      content.classList.add("active");
      sidebar.classList.add("active");
    }
    console.log(Image);
    setside(!side);
  };
  const list = (e) => {
    const container = e.target.parentElement.parentElement.parentElement;
    console.log(e.target.parentElementr);
    if (container.className == "main") {
      const listm = container.querySelector(".list-main");
      // console.log(container);

      listm.classList.toggle("active");
    } else if (container.className == "title") {
      const listm = container.parentElement.querySelector(".list-main");
      // console.log(container.parentElement);

      listm.classList.toggle("active");
    }

    e.target.parentElement.classList
      ? e.target.parentElement.classList.toggle("active")
      : e.target.parentElement.parentElement.classList.toggle("active");

    setshow(!show);
  };
  const decor = (e) => {
    const items = document.querySelectorAll(".item");

    items.forEach((e) => {
      if (e.className == "item active") {
        e.classList.remove("active");
      }

      //
    });
    e.target.className == "nameoficon"
      ? e.target.parentElement.classList.add("active")
      : e.target.parentElement.className == "icon"
      ? e.target.parentElement.parentElement.classList.add("active")
      : e.target.classList.add("active");

    console.log(e.target.className);
  };
  const mode = () => {
    dark
      ? document.querySelector("body").setAttribute("data-mode", "dark")
      : document.querySelector("body").setAttribute("data-mode", "light");

    setdark(!dark);
  };
  return (
    <div className="sidebar">
      {" "}
      <div className="logo">
        <div className="bars" onClick={bar}>
          <BiMenuAltLeft />
        </div>{" "}
        <Link to="/" style={{textDecoration: "none"}}>
          <div className="name">
            Z<span>admin</span>
          </div>
        </Link>
      </div>
      <div className="main">
        <div className="title">
          Main{" "}
          <span className="plus" onClick={list}>
            <FaPlus className="p" /> <FaMinus className="m" />
          </span>
        </div>{" "}
        <div className="list-main">
          <Link to="/dashboard" style={{textDecoration: "none"}}>
            {" "}
            <div className="item" onClick={decor}>
              <div className="icon">
                <FaChartPie />
              </div>{" "}
              <div className="nameoficon">Dashboard</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="main">
        <div className="title">
          List{" "}
          <span className="plus" onClick={list}>
            <FaPlus className="p" /> <FaMinus className="m" />
          </span>
        </div>
        <div className="list-main">
          <Link to="/Users" style={{textDecoration: "none"}}>
            <div className="item" onClick={decor}>
              <div className="icon">
                <FaUserAlt />
              </div>{" "}
              <div className="nameoficon">Users</div>
            </div>
          </Link>
          {/* <Link to="/Resize" style={{textDecoration: "none"}}>
            <div className="item" onClick={decor}>
              <div className="icon">
                <BsMegaphoneFill />
              </div>{" "}
              <div className="nameoficon" onClick={decor}>
                PhotoGallery
              </div>
            </div>{" "}
          </Link> */}
          <Link to="/Resize" style={{textDecoration: "none"}}>
            <div className="item" onClick={decor}>
              <div className="icon">
                <BiCrop />
              </div>{" "}
              <div className="nameoficon" onClick={decor}>
                Resize Image
              </div>
            </div>
          </Link>{" "}
          <Link to="/wordtopdf" style={{textDecoration: "none"}}>
            <div className="item" onClick={decor}>
              <div className="icon">
                <FaFilePdf />
              </div>{" "}
              <div className="nameoficon" onClick={decor}>
                WordtoPdf
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="main">
        <div className="title">
          Useful{" "}
          <span className="plus" onClick={list}>
            <FaPlus className="p" /> <FaMinus className="m" />
          </span>
        </div>
        <div className="list-main">
          <Link to="/Calendar" style={{textDecoration: "none"}}>
            {" "}
            <div
              className="item"
              onClick={decor}
              style={{textDecoration: "none"}}>
              <div className="icon">
                <AiOutlineCalendar />
              </div>{" "}
              <div className="nameoficon" onClick={decor}>
                Calendar
              </div>
            </div>
          </Link>
          <Link to="/3Dmodle" style={{textDecoration: "none"}}>
            <div className="item" onClick={decor}>
              <div className="icon">
                <FaStar />
              </div>{" "}
              <div className="nameoficon" onClick={decor}>
                3D color
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="main">
        <div className="title">
          Ai{" "}
          <span className="plus" onClick={list}>
            <FaPlus className="p" /> <FaMinus className="m" />
          </span>
        </div>
        <div className="list-main">
          <Link to="/remove" style={{textDecoration: "none"}}>
            {" "}
            <div className="item" onClick={decor}>
              <div className="icon">
                <BiSolidMagicWand />
              </div>{" "}
              <div className="nameoficon" onClick={decor}>
                Removebg
              </div>
            </div>
          </Link>
          <Link to="/ImageGenerator" style={{textDecoration: "none"}}>
            <div className="item" onClick={decor}>
              <div className="icon">
                <FaImages />
              </div>{" "}
              <div className="nameoficon" onClick={decor}>
                Image Generator
              </div>
            </div>
          </Link>
          <Link to="/SpeachToText" style={{textDecoration: "none"}}>
            <div className="item" onClick={decor}>
              <div className="icon">
                <CiMicrophoneOn />
              </div>{" "}
              <div className="nameoficon" onClick={decor}>
                SpeachToText
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="main">
        <div className="title">
          Useful{" "}
          <span className="plus" onClick={list}>
            <FaPlus className="p" /> <FaMinus className="m" />
          </span>
        </div>
        <div className="list-main">
          <Link to="https://phenomenal-pasca-0e27e1.netlify.app/">
            <div className="item" onClick={decor}>
              <div className="icon">
                <FiUser />
              </div>{" "}
              <div className="nameoficon" onClick={decor}>
                Profillo
              </div>
            </div>
          </Link>
          <div className="item" onClick={decor}>
            <div className="icon">
              <FiLogOut />
            </div>{" "}
            <div className="nameoficon" onClick={decor}>
              LogOut
            </div>
          </div>
          <div className="item" onClick={mode}>
            <div className="icon">{dark ? <BsFillMoonFill /> : <BiSun />}</div>{" "}
            <div className="nameoficon" onClick={mode}>
              Mode
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
