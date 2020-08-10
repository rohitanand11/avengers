import React from 'react';
import Classes from "./StatsContainer.module.scss";
import Stats from './stats/Stats';

const StatsContainer = (props) => {

    const {statistics} = props;

    const renderStats = () => {
        return statistics.data.map((elem,index)=>{
            return <Stats key={index} character={elem}/>
        });
    };

    return (
        <div className={Classes.StatsContainer}>
            {renderStats()}
        </div>
    );
}

export default StatsContainer;