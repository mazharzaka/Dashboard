import React, {useCallback, useState} from "react";
import {PieChart, Pie, ResponsiveContainer, Cell} from "recharts";
import RenderActiveShape from "./cir";
import "./circle.css";

export default function Circle() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const data = [
    {name: "Male", value: 400},
    {name: "Female", value: 300},
  ];

  return (
    <div className="cir">
      <div class="cir-title">
        <div class="mark">
          <span class="markup"></span>
          <span class="markdown"></span>
        </div>
        Candidates
      </div>
      {/* <div className="con"> </div> */}
      <ResponsiveContainer width="100%" height="80%">
        <PieChart width={200} height={150}>
          <Pie
            activeIndex={activeIndex}
            activeShape={RenderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={60}
            fill="#ffc745"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
