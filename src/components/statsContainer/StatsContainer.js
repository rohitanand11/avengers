import React from 'react';
// import Classes from "./StatsContainer.module.scss";
import Stats from './stats/Stats';

const StatsContainer = ({statistics}) => {

    const renderStats = () => {
        return statistics.data.map((elem,index)=>{
            return <Stats key={index} character={elem}/>
        })
    };

    return (
        <div>
            {renderStats()}
        </div>
    );
}

export default StatsContainer;