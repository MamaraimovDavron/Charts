import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
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

const labels = [
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
];

const data = {
  labels,
  datasets: [
    {
      id: 1,
      label: "Sales",
      data: labels.map((item) => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "gray",
      backgroundColor: "#714BE7",
      borderWidth: 5,
      fontWeightL: "600",
      color: "white",
    },
  ],
};
console.log(faker.datatype.number({ min: 0, max: 1000 }));
export default function index() {
  return (
    <Box>
      <Line
        className="line"
        datasetIdKey="id"
        data={data}
        onClick={() => {
          console.log(
            labels.map((item) => faker.datatype.number({ min: 0, max: 1000 }))
          );
        }}
      />
    </Box>
  );
}
