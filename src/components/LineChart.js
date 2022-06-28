import React from "react";
import { useState } from "react";
import { GGPLOT } from "react-d3-ggplot";
import { Line } from "react-d3-ggplot";

const LineChart = () => {
  const [state, setState] = useState({
    data: [
      { x: 0, y: 0 },
      { x: 10, y: 10 },
    ],
    aes: ["x", "y"],
    dimensions: { width: 500, height: 300, padding: 50 },
  });

  return (
    <GGPLOT {...state}>
      <Line />
    </GGPLOT>
  );
};

export default LineChart;
