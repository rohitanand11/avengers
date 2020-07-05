import React from 'react';
import Classes from './ArrowButtons.module.css';

const ArrowButtons = () => {
    return(
        <React.Fragment>
            <div className={Classes.leftArrow}></div>
            <div className={Classes.rightArrow}></div>
        </React.Fragment>
    );
}

export default ArrowButtons;