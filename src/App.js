import React from "react";
// import MyLine from "./components/Line/index";
import styled from "styled-components";
// import MyBar from "./components/Bar";
import MyBar1 from "./components/Bar2";
// import PolarAreaChart from "./components/PolarAreChart";

const Main = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* border: 1px solid green; */
  box-sizing: border-box;
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
      <MyBar1 />
    </Main>
  );
};

export default App;
