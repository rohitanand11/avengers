import React from "react";
import ImageContainer from "./ImageContainer/ImageContainer";

import Classes from "./Corousal.module.css";

const Corousal = (props) => {
  console.log(props);
  return (
    <div className={Classes.Corousal}>
      <ImageContainer
        data={props.data}
        currentIndex={props.currentIndex}
        leftClick={props.leftClick}
        rightClick={props.rightClick}
      />
    </div>
  );
};

export default Corousal;
