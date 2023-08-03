import React from "react";
import {FaAngleUp} from "react-icons/fa";
import {FaUserAlt} from "react-icons/fa";
import {IoMdCart} from "react-icons/io";
import {AiFillDollarCircle} from "react-icons/ai";
import {AiFillWallet} from "react-icons/ai";
import {Tooltip} from "react-tooltip";

import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
const Widdget = ({type}) => {
  let data;
  if (type == "user") {
    data = {
      title: "user",
      ismoney: false,
      link: "See all users",
      icon: <FaUserAlt />,
      class: "icon-user",
      money: "$1000",
      per: "25",
      pos: "percent pos",
      percentage: 60,
      fcolor: "#1C4E80",
      scolor: "#FFC745",
    };
  } else if (type == "order") {
    data = {
      title: "Order",
      ismoney: false,
      class: "icon-order",
      link: "View all orders",
      icon: <IoMdCart />,
      money: "$5200",
      per: "10",
      pos: "percent neg",
      percentage: 30,
      fcolor: "#e442158a",
      scolor: "#FFC745",
    };
  } else if (type == "earaning") {
    data = {
      title: "Earning",
      class: "icon-ear",
      ismoney: false,
      link: "View all earnings",
      icon: <AiFillDollarCircle />,
      money: "$2300",
      per: "59",
      pos: "percent pos",
      percentage: 90,
      fcolor: "#055809",
      scolor: "#FFC745",
    };
  } else if (type == "balance") {
    data = {
      class: "icon-balance",
      title: "Balance",
      ismoney: false,
      icon: <AiFillWallet />,
      link: "Balance",
      money: "$14000",
      per: "6",
      pos: "percent neg",
      percentage: 60,
      fcolor: "#ffc7457a",
      scolor: "#bd8d1d",
    };
  }

  console.log(data);
  return (
    <div className="widdget">
      <div className="top">
        <div className="username">{data.title}</div>
        <div className={data.pos}>
          <FaAngleUp className="icon-color" /> {data.per}%
        </div>
      </div>
      <div className="mid">
        <div className="money">{data.money}</div>
        <div
          className="chart"
          data-tooltip-id="my-tooltip"
          data-tooltip-content={data.percentage + "%"}>
          {" "}
          <Tooltip id="my-tooltip" />{" "}
          <CircularProgressbar
            value={data.percentage}
            // text="Total : 2345"
            styles={buildStyles({
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",

              // Text size
              textSize: "16px",

              // Colors
              pathColor: ` ${data.fcolor}`,
              textColor: "#202020",
              trailColor: ` ${data.scolor}`,
              backgroundColor: "rgb(255, 199, 69)",
            })}
          />
        </div>
      </div>
      <div className="down">
        <div className="see">{data.link}</div>
        <div className={data.class}>{data.icon}</div>
      </div>
    </div>
  );
};
export default Widdget;
