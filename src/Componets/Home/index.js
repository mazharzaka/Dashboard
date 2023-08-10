import React from "react";

import Widdget from "../widdget";
import Circle from "../circle";
import PieChar from "../piechart";
import Bars from "../Bars";
import Areac from "../Area";
import Geo from "../Geo";
import GridTable from "../Grid";

const Home = () => {
  return (
    <>
      {" "}
      <div>
        {" "}
        {/* <div className="content"> </div> */}
        <div className="contaier">
          <Widdget type="user" />
          <Widdget type="order" />
          <Widdget type="earaning" />
          <Widdget type="balance" />
        </div>
        <div className="charts">
          <Circle />
          <PieChar />
          <Bars />
        </div>
        <div className="area">
          <Areac />
          <div className="geo">
            <Geo />
          </div>
        </div>
        <div className="grid">
          <GridTable />
        </div>
      </div>
    </>
  );
};
export default Home;
