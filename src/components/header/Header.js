import React from 'react';
import Classes from './Header.module.css';

const Header = () => {
    return(
        <div className={Classes.Header}>
            <div className={Classes.AppName}>
                Avengers
            </div>
        </div>
    )
}

export default Header;