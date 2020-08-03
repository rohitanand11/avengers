import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Corousal from "../../components/corousal/Corousal";
import Counter from "../../components/counter/Counter";
import Dialogues from "../../components/dialogues/Dialogues";

import DataArr from "../../data/dataArray/dataArray";
import Classes from "./App.module.css";

const InitialIndex = 0;

const App = () => {
  const [dataArray,] = useState([...DataArr]);
  const [currIndex, setCurrIndex] = useState(InitialIndex);

  const handleLeftArrowClick = () => {
    
    const counter = currIndex;
    const counterLimit = dataArray.length - 1;
    if (counter === 0) {
      setCurrIndex( ()=>counterLimit);
    } else {
      setCurrIndex(()=>counter - 1);
    }
  };

  const handleRightArrowClick = () => {
    
    const counter = currIndex;
    const counterLimit = dataArray.length - 1;
    if (counter === counterLimit) {
      setCurrIndex(0);
    } else {
      setCurrIndex(counter + 1);
    }
  }

  const update = () => {
    
    if(currIndex===dataArray.length-1) {
      setCurrIndex(0);
    } else {
      setCurrIndex(currIndex + 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(update, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className={Classes.app}>

      <Header title="AVENGERS" />

      <Corousal
        data={dataArray}
        currentIndex={currIndex}
        leftClick={handleLeftArrowClick}
        rightClick={handleRightArrowClick}
      />

      <Counter currentCounter={currIndex+1} totalLength={dataArray.length}/>
      
      <Dialogues>
        {dataArray[currIndex].dialouge}
      </Dialogues>

    </div>
  );
};

export default App;
