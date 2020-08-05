import React from 'react';
import Classes from './BarChart.module.scss';

const BarChart = ({criteriaCount,character_data}) => {
    const renderEntery = () => {
        return (
            <div className={Classes.main_container}>
                <div className={Classes.row}>
                    <div className={Classes.label}>{}</div>
                    <div className={Classes.bar}>
                        <div className={Classes.seeds}>h</div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <React.Fragment>
            <div className={Classes.label}></div>
        </React.Fragment>
    )
}

export default BarChart;