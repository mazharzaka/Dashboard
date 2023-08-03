import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import {Tooltip} from "react-tooltip";
import {FaAngleUp} from "react-icons/fa";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "./circle.css";
export const Circle = () => {
  const percentage = 55;
  return (
    <div className="cir">
      <div className="cir-title">
        <div className="mark">
          <span className="markup"></span>
          <span className="markdown"></span>
        </div>
        Candidates
      </div>
      <div className="con">
        {" "}
        <div
          className="circle"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Male 55%">
          {" "}
          <Tooltip id="my-tooltip" />{" "}
          <CircularProgressbar
            value={percentage}
            // text="Total : 2345"
            styles={buildStyles({
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",

              // Text size
              textSize: "16px",

              // Colors
              pathColor: `#1c4e80`,
              textColor: "#202020",
              trailColor: "rgb(255, 199, 69)",
              backgroundColor: "rgb(255, 199, 69)",
            })}
          />
          <div className="total">Total : 2340</div>
        </div>
      </div>
      <div className="result">
        <div className="r-result">
          <div className="name-r">
            <span className="mark-r"></span>
            Male
          </div>
          <div className="re">
            <div className="value">1287</div>
            <div className="percent pos">
              16%
              <FaAngleUp className="icon-color" />
            </div>
          </div>
        </div>
        <div className="l-result">
          {" "}
          <div className="name-r">
            <span className="mark-l"></span>
            Female
          </div>
          <div className="re">
            <div className="value">1053</div>
            <div className="percent neg">
              11%
              <FaAngleUp className="icon-color" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Circle;
