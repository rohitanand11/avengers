import React from 'react';
import Classes from './ArrowButtons.module.css';

const ArrowButtons = (props) => {
    
    return(
        <React.Fragment>
            <div className={Classes.leftArrow} onClick={props.leftClick}></div>
            <div className={Classes.rightArrow} onClick={props.rightClick}></div>
        </React.Fragment>
    );
}

export default ArrowButtons;