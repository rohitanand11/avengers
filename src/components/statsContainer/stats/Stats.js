import React from 'react';
import Classes from './Stats.module.scss';
import BarChart from '../BarChart/BarChart';

const Stats = ({ character }) => {

    const calculateProperties = () => {
        let count = 0;
        for (let keys in character.statistics) {
            count += 1;
        }
        return count;
    };

    return (
        <div className={Classes.Stats}>
            <img src={character.profile_img} alt={character.character_name} className={Classes.profile_picture} />

            <div className={Classes.statsBar}>
                <BarChart character_data={character.statistics} criteriaCount={calculateProperties()}/>
            </div>
        </div>
    );
};

export default Stats;