import React from "react";
import "./Area.css";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "March",
    ProA: 2000,
    ProB: 2400,
    ProC: 2400,
    ProD: 3500,
  },
  {
    name: "April",
    ProA: 2000,
    ProB: 5000,
    ProC: 3000,
    ProD: 3500,
  },
  {
    name: "May",
    ProA: 5060,
    ProB: 2000,
    ProC: 4500,
    ProD: 1500,
  },
  {
    name: "June",
    ProA: 6000,
    ProB: 3000,
    ProC: 4000,
    ProD: 2000,
  },
  {
    name: "July",
    ProA: 2900,
    ProB: 2000,
    ProC: 3500,
    ProD: 0,
  },
];

export default function Areac() {
  return (
    <div className="area-chart">
      {" "}
      <div className="bar-name">
        A comparison between producers <span>(in the last four months)</span>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="ProA"
            stackId="1"
            stroke="rgb(16, 150, 24)"
            fill="rgb(16, 150, 24,0.9)"
          />
          <Area
            type="monotone"
            dataKey="ProB"
            stackId="1"
            stroke="#rgba(220, 55, 18)"
            fill="rgba(220, 55, 18, 0.92)"
          />
          <Area
            type="monotone"
            dataKey="ProC"
            stackId="1"
            stroke="rgb(51, 102, 204)"
            fill="rgb(51, 102, 204,0.9)"
          />{" "}
          <Area
            type="monotone"
            dataKey="ProD"
            stackId="1"
            stroke="rgb(153, 0, 153)"
            fill="rgb(153, 0, 153,0.9)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
