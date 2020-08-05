import React from 'react';
import Classes from "./StatsContainer.module.scss";
import Stats from './stats/Stats';

const StatsContainer = ({statistics}) => {
    return (
        <div>
            <Stats statistics={statistics}/>
        </div>
    );
}

export default StatsContainer;