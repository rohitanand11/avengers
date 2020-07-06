import React from 'react';
import Classes from './Counter.module.css';

const Counter = (props) => {
    return(
        <div className={Classes.Counter}>
            {props.currentCounter} / {props.totalLength}
        </div>
    )
}

export default Counter;