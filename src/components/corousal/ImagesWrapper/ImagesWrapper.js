import React from 'react';
import Image from '../Image/Image';

import Classes from './ImagesWrapper.module.css';

const ImagesWrapper = ({data}) => {

    console.log(data);
    const sideBySideImages = () => {
        const newDataArray = data.map((elem)=>{
            return <Image src={elem.path} alt={elem.name} key={elem.id}/>
        })
        return newDataArray;
    }
    return(
        <div className={Classes.ImagesWrapper}>
            {sideBySideImages()}
        </div>
    )
}

export default ImagesWrapper;