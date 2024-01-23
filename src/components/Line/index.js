import React from "react";
import { Line } from "react-chartjs-2";
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

const MyLine = () => {
  return (
    <Line
      datasetIdKey="id"
      data={{
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            id: 1,
            label: "Sales",
            data: [40, 80, 58, 45, 40, 43],
            borderColor: "#FB8835",
            backgroundColor: "#FB8835",
          },
          {
            id: 2,
            label: "Leads",
            data: [20, 35, 75, 52, 40, 43],
            borderColor: "#18A6F8",
            backgroundColor: "#18A6F8",
          },
        ],
      }}
    />
  );
};

export default MyLine;
