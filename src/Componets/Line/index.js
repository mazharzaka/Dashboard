import React from "react";
import {ResponsiveLine} from "@nivo/line";

export default function Lineuser(props) {
  const dataline = [
    {
      id: "japan",
      color: props.x.color,
      data: [
        {
          x: "March",
          y: props.x.march,
        },
        {
          x: "April",
          y: props.x.april,
        },
        {
          x: "May",
          y: props.x.may,
        },
        {
          x: "June",
          y: props.x.june,
        },
        {
          x: "July",
          y: props.x.july,
        },
      ],
    },
  ];
  // console.log(props.x.color);
  return (
    <div className="line">
      {" "}
      <ResponsiveLine
        data={dataline}
        margin={{top: 10, right: 10, bottom: 60, left: 30}}
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
        colors={{scheme: "dark2"}}
        pointSize={10}
        pointColor={{from: "color", modifiers: []}}
        pointBorderWidth={2}
        pointBorderColor={{from: "serieColor", modifiers: []}}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[]}
      />
    </div>
  );
}
