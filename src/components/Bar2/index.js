import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Most Popular Search Engines",
    },
  },
};

const MyBar1 = () => {
  return (
    <Bar
      label="Most Popular Search Engines"
      //   datasetIdKey="id"
      options={options}
      data={{
        labels: ["January", "February", "March", "April"],

        datasets: [
          {
            id: 1,
            label: "Google",
            data: [850, 1170, 380, 190],
            backgroundColor: "#E94649",
          },
          {
            id: 2,
            label: "Bing",
            data: [820, 980, 380, 220],
            backgroundColor: "#F6B53F",
          },
          {
            id: 3,
            label: "Yahoo",
            data: [830, 1050, 250, 200],
            backgroundColor: "#6FAAB0",
          },
          {
            id: 4,
            label: "Ask",
            data: [650, 980, 390, 230],
            backgroundColor: "#C4C24A",
          },
        ],
      }}
    />
  );
};

export default MyBar1;
