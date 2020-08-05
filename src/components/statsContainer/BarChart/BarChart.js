import React from 'react';
import Classes from './BarChart.module.scss';

const BarChart = ({ criteriaCount, character_data }) => {

    const renderEntery = () => {

        const Entries = [];

        for (let key in character_data) {
            Entries.push(<div className={Classes.row}>

                <div className={Classes.label}>{key}</div>

                <div className={Classes.bar}>
                    {renderSeeds(character_data[key])}
                </div>
                <div className={Classes.score}>
                    {character_data[key]}/10
                </div>
            </div>
            );
        }

        return Entries;
    };

    const renderSeeds = (pScore) => {
        const seeds = [];
        for (let i = 0; i < pScore; i++) {
            seeds.push(<div className={Classes.seeds}>O</div>);
        }
        return seeds;
    }

    return (
        <div className={Classes.main_container}>
            {renderEntery()}
        </div>
    )
}

export default BarChart;