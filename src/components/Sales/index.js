import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Box = styled.div`
  border: 1px solid;
  width: 100%;
  color: white;
  .line {
    color: red;
    font-weight: bold;
  }
`;
export default function index() {
  return (
    <Box>
      <Line
        className="line"
        datasetIdKey="id"
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "Sales",
              data: [
                3990, 3789, 2810, 4000, 3780, 2890, 3200, 3700, 4200, 3200,
                3390, 3890,
              ],
              borderColor: "gray",
              backgroundColor: "#714BE7",
              borderWidth: 5,
              fontWeightL: "600",
              color: "white",
            },
          ],
        }}
      />
    </Box>
  );
}
