import React from "react";
// import MyLine from "./components/Line/index";
import styled from "styled-components";
// import MyBar from "./components/Bar";
// import MyBar1 from "./components/Bar2";
// import PolarAreaChart from "./components/PolarAreChart";
import Sales from "./components/Sales/index";

const Main = styled.div`
  width: 80%;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* border: 1px solid green; */
  background-color: #714be7;
  box-sizing: border-box;
  h1 {
    font-size: 50px;
    color: white;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
`;

// const LineBox = styled.div`
//   width: 30%;
// `;

// const BarBox = styled.div`
//   width: 30%;
// `;
// const PolarAreaBox = styled.div`
//   width: 30%;
// `;

const App = () => {
  return (
    <Main>
      {/* <LineBox>
        <MyLine />
      </LineBox>
      <BarBox>
        <MyBar />
      </BarBox>
      <PolarAreaBox>
        <PolarAreaChart />
      </PolarAreaBox> */}
      {/* <MyBar1 /> */}
      <h1>Sales Dashboard</h1>
      <Sales />
    </Main>
  );
};

export default App;
