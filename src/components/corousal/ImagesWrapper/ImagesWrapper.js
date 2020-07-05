import React from "react";
import Image from "../Image/Image";

import Classes from "./ImagesWrapper.module.css";

const ImagesWrapper = (props) => {
  const { data } = props;
  const { currentIndex } = props;
  console.log(currentIndex);

  const sideBySideImages = () => {
    const newDataArray = data.map((elem) => {
      return <Image src={elem.path} alt={elem.name} key={elem.id} />;
    });
    return newDataArray;
  };
  return (
    <div
      className={Classes.ImagesWrapper}
      style={{
        transform: `translateX(-${currentIndex * 100}%)`,
      }}
    >
      {sideBySideImages()}
    </div>
  );
};

export default ImagesWrapper;
