import React from "react";
import {ResponsivePie} from "@nivo/pie";
export default function Userpie(props) {
  const datapie = [
    {
      id: "March",
      label: "March",
      value: props.x.march,
      color: props.x.color,
    },
    {
      id: "April",
      label: "April",
      value: props.x.april,
      color: "hsl(128, 70%, 50%)",
    },
    {
      id: "May",
      label: "may",
      value: props.x.may,
      color: "hsl(6, 70%, 50%)",
    },
    {
      id: "June",
      label: "June",
      value: props.x.june,
      color: "hsl(241, 70%, 50%)",
    },
    {
      id: "july",
      label: "july",
      value: props.x.july,
      color: "hsl(259, 70%, 50%)",
    },
  ];
  return (
    <ResponsivePie
      data={datapie}
      margin={{top: 20, right: 10, bottom: 20, left: 10}}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={{scheme: "purple_blue"}}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{from: "color"}}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
      legends={[]}
    />
  );
}
