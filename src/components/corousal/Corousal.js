import React from 'react';
import ImageContainer from './ImageContainer/ImageContainer';

import Classes from './Corousal.module.css';

const Corousal = ({data}) => {
    // console.log(data);
     return (
        <div className={Classes.Corousal}>
            <ImageContainer data = {data}/>
        </div>
    )
}

export default Corousal;