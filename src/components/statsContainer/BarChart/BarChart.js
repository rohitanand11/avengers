import React from "react";
import Classes from "./BarChart.module.scss";

const BarChart = ({ criteriaCount, character_data }) => {
  const renderEntery = () => {
    return (
      <table>
        <tbody>{renderRow()}</tbody>
      </table>
    );
  };

  const renderRow = () => {
    const Entries = [];
    for (let key in character_data) {
      Entries.push(
        <tr key={key}>
          <th style={{width:"30%"}}>{key}</th>

          <td style={{fontSize:"1rem",width:"55%"}}>{renderSeeds(character_data[key])}</td>
          <td style={{width:"15%"}}>{character_data[key]}/10</td>
        </tr>
      );
    }
    return Entries;
  };

  const renderSeeds = (pScore) => {
    const seeds = [];
    for (let i = 0; i < pScore; i++) {
      seeds.push('🔥');
    }
    
    return seeds.join('');
  };

  return <div className={Classes.BarChart}>{renderEntery()}</div>;
};

export default BarChart;
