
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];

export const options = {
  backgroundColor: "#1e1e1e", 
  datalessRegionColor: "#2c2c2c", 
  defaultColor: "#00bcd4",
  legend: {
    textStyle: { color: "#000" }, 
  },
  tooltip: {
    textStyle: { color: "#000" }, 
    showColorCode: true,
  },
};

export default function Demographics() {
  return (
    <div style={{ width: "100%", height: "200px", borderRadius: "12px", overflow: "hidden", backgroundColor: "#1e1e1e" }}>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="200px"
        data={data}
        options={options}
      />
    </div>
  );
}
