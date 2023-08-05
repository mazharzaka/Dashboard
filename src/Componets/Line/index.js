import React from "react";
import {ResponsiveLine} from "@nivo/line";
const dataline = [
  {
    id: "japan",
    color: "hsl(93, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 108,
      },
      {
        x: "helicopter",
        y: 95,
      },
      {
        x: "boat",
        y: 191,
      },
      {
        x: "train",
        y: 6,
      },
      {
        x: "subway",
        y: 176,
      },
    ],
  },
];

export default function Lineuser() {
  return (
    <div className="line">
      {" "}
      <ResponsiveLine
        data={dataline}
        margin={{top: 10, right: 20, bottom: 50, left: 50}}
        xScale={{type: "point"}}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        // axisLeft={{
        //   tickSize: 5,
        //   tickPadding: 5,
        //   tickRotation: 0,
        //   legend: "count",
        //   legendOffset: -40,
        //   legendPosition: "middle",
        // }}
        pointSize={10}
        pointColor={{from: "color", modifiers: []}}
        pointBorderWidth={2}
        pointBorderColor={{from: "serieColor"}}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[]}
      />
    </div>
  );
}
