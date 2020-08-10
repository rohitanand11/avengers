import React from "react";
import Classes from "./Stats.module.scss";
import BarChart from "../BarChart/BarChart";

const Stats = ({ character }) => {
  const calculateProperties = () => {
    return Object.keys(character.statistics).length;
  };

  return (
    <div className={Classes.Stats}>
      <div className={Classes.Image}>
        <img
          src={character.profile_img}
          alt={character.character_name}
          className={Classes.profile_picture}
        />
      </div>
      <BarChart
        character_data={character.statistics}
        criteriaCount={calculateProperties()}
      />
    </div>
  );
};

export default Stats;
