import React, { useState } from "react";
import Header from "../../components/header/Header";
import Corousal from "../../components/corousal/Corousal";

import DataArr from "../../data/dataArray/dataArray";
import Classes from "./App.module.css";

const InitialIndex = 0;

const App = () => {
  const [dataArray] = useState([...DataArr]);
  const [currIndex, setCurrIndex] = useState(InitialIndex);

  const handleLeftArrowClick = () => {
    console.log("clicked" + currIndex);
    const counter = currIndex;
    const counterLimit = dataArray.length - 1;
    if (counter === 0) {
      setCurrIndex(counterLimit);
    } else {
      setCurrIndex(counter - 1);
    }
  };

  const handleRightArrowClick = () => {
    
    console.log("clicked" + currIndex);
    const counter = currIndex;
    const counterLimit = dataArray.length - 1;
    if (counter === counterLimit) {
      setCurrIndex(0);
    } else {
      setCurrIndex(counter + 1);
    }

  }

  const autoUpdate=() => {
    setInterval(handleRightArrowClick, 2000);
  }


  return (
    <div className={Classes.app}>
      {autoUpdate()}
      <Header />
      <Corousal
        data={dataArray}
        currentIndex={currIndex}
        leftClick={handleLeftArrowClick}
        rightClick={handleRightArrowClick}
      />
    </div>
  );
};

export default App;
