import React from 'react';

import Classes from './Dialogues.module.css';

const Dialogues = (props) => {
    return(
        <div className={Classes.DialogueContainer}>
            <div className={Classes.Dialogues}>
                {props.children}
            </div>
        </div>
    )
}

export default Dialogues;