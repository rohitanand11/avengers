import React from 'react';
import Classes from './Header.module.css';

const Header = (props) => {
    return(
        <div className={Classes.Header}>
            <div className={Classes.AppName}>
                {props.title}
            </div>
        </div>
    )
}

export default Header;