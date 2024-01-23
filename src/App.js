import React from "react";
import MyLine from "./components/Line/index";
import styled from "styled-components";
import MyBar from "./components/Bar";
import PolarAreaChart from "./components/PolarAreChart";

const Main = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* border: 1px solid green; */
  box-sizing: border-box;
`;

// const LineBox = styled.div`
//   width: 45%;
// `;

// const BarBox = styled.div`
//   width: 50%;
//   /* border: 1px solid red; */
// `;

const App = () => {
  return (
    <Main>
      {/* <LineBox>
        <MyLine />
      </LineBox>
      <BarBox>
        <MyBar />
      </BarBox> */}

      <PolarAreaChart />
    </Main>
  );
};

export default App;
