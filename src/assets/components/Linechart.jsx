
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    { type: "number", label: "x" },
    { type: "number", label: "values" },
    { id: "i0", type: "number", role: "interval" },
    { id: "i1", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
  ],
  [1, 100, 90, 110, 85, 96, 104, 120],
  [2, 120, 95, 130, 90, 113, 124, 140],
  [3, 130, 105, 140, 100, 117, 133, 139],
  [4, 90, 85, 95, 85, 88, 92, 95],
  [5, 70, 74, 63, 67, 69, 70, 72],
  [6, 30, 39, 22, 21, 28, 34, 40],
  [7, 80, 77, 83, 70, 77, 85, 90],
  [8, 100, 90, 110, 85, 95, 102, 110],
];

export const options = {
  title: "Bars, default",
  curveType: "function",
  series: [{ color: "#D9544C" }],
  intervals: { style: "bars" },
  legend: "none",
  backgroundColor: "#000",
  hAxis: {
    textStyle: { color: "#fff" },
    gridlines: { color: "#444" }
  },
  vAxis: {
    textStyle: { color: "#fff" },
    gridlines: { color: "#444" }
  },
  titleTextStyle: {
    color: "#fff",
    fontSize: 18
  }
};

export default function Linechart() {
  return (
    <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
    <Chart
      chartType="LineChart"
      width="100%"
      height="250px"
      data={data}
      options={options}
    />
  </div>
  );
}
