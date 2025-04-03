// import React from "react";
// import { Chart } from "react-google-charts";

// const data = [
//   ["Year", "Sales", "Expenses"],
//   ["2013", 1000, 400],
//   ["2014", 1170, 460],
//   ["2015", 660, 1120],
//   ["2016", 1030, 540],
// ];

// const options = {
//   chart: {
//     title: "Company Performance",
//     subtitle: "Sales and Expenses over the Years",
//   },
  
// };

// function Linechart() {
//   return (
//     <Chart
//       chartType="Line"
//       width="90%"
//       height="200px"
//       data={data}
//       options={options}
//     />
//   );
// }

// export default Linechart;


/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Linechart extends Component{
	render() {
		const options = {
      theme:'dark1',
			animationEnabled: true,
			title:{
				text: "Monthly Sales - 2025"
			},
      height: 250, 
			axisX: {
				valueFormatString: "MMM"
			},
			axisY: {
				title: "Sales (in USD)",
				prefix: "$"
			},
			data: [{
				yValueFormatString: "$#,###",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: [
					{ x: new Date(2017, 0), y: 25060 },
					{ x: new Date(2017, 1), y: 27980 },
					{ x: new Date(2017, 2), y: 42800 },
					{ x: new Date(2017, 3), y: 32400 },
					{ x: new Date(2017, 4), y: 35260 },
					{ x: new Date(2017, 5), y: 33900 },
					{ x: new Date(2017, 6), y: 40000 },
					{ x: new Date(2017, 7), y: 52500 },
					{ x: new Date(2017, 8), y: 32300 },
					{ x: new Date(2017, 9), y: 42000 },
					{ x: new Date(2017, 10), y: 37160 },
					{ x: new Date(2017, 11), y: 38400 }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default Linechart;                              