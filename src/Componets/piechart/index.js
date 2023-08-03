import React from "react";
import {PieChart, Pie, Cell, Tooltip, ResponsiveContainer} from "recharts";

const data = [
  {name: "Product A", value: 400},
  {name: "Product B", value: 300},
  {name: "Product C", value: 300},
  {name: "Product D", value: 200},
];

const COLORS = ["#109618", "#DC3912", "#3366CC", "#990099"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function PieChar() {
  return (
    <div className="table">
      <div className="pie">Sales</div>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart width={600} height={600}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="products">
        <div className="pro">
          <div className="a"></div>
          Pro A
        </div>{" "}
        <div className="pro">
          <div className="b"></div>
          Pro B
        </div>{" "}
        <div className="pro">
          <div className="c"></div>
          Pro C
        </div>{" "}
        <div className="pro">
          <div className="d"></div>
          Pro D
        </div>
      </div>
    </div>
  );
}

export default PieChar;
