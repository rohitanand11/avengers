import React from 'react';
import Classes from './ImageContainer.module.css';
import ImagesWrapper from '../ImagesWrapper/ImagesWrapper';
import ArrowButtons from '../arrowButtons/ArrowButtons';

const ImageContainer =({data}) => {
    return (
        <div className={Classes.ImageContainer}>
            <ArrowButtons/>
            <ImagesWrapper data = {data}/>
        </div>
    )
}

export default ImageContainer;