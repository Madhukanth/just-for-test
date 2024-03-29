import React from "react";
import {
  LineSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";
import "react-vis/dist/style.css";

const data = [
  { x: 0, y: 8 },
  { x: 1, y: 5 },
  { x: 2, y: 4 },
  { x: 3, y: 9 },
  { x: 4, y: 1 },
  { x: 5, y: 7 },
  { x: 6, y: 6 },
  { x: 7, y: 3 },
  { x: 8, y: 2 },
  { x: 9, y: 0 },
];

const Graph = () => {
  return (
    <XYPlot width={700} height={500}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />

      <LineSeries data={data} strokeWidth={3} />
    </XYPlot>
  );
};

export default Graph;
