import React from "react";
import "./Bars.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "April",

    proC: 3000,
    proB: 5000,
    amt: 2400,
  },
  {
    name: "May",
    proC: 4500,
    proB: 2000,
    amt: 2210,
  },
  {
    name: "June",
    proC: 4000,
    proB: 3000,
    amt: 2210,
  },

  {
    name: "July",
    proC: 3500,
    proB: 2000,
    amt: 2181,
  },
];

const renderCustomizedLabel = (props) => {
  const {x, y, width, height, value} = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle">
        {"B"}
      </text>
    </g>
  );
};

export default function Bars() {
  return (
    <div className="bars-chart">
      <div className="bar-name">
        {" "}
        <div className="mark">
          <span className="markup"></span>
          <span className="markdown"></span>
        </div>
        A comparison between two producers{" "}
        <span>(in the last four months)</span>
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />

          <Tooltip />
          <Legend />
          <Bar dataKey="proB" fill="#DC3912" minPointSize={5}>
            <LabelList dataKey="name" content={renderCustomizedLabel} />
          </Bar>
          <Bar dataKey="proC" fill="#3366CC" minPointSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
