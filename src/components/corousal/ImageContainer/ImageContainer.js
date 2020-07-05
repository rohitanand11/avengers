import React from 'react';
import Classes from './ImageContainer.module.css';
import ImagesWrapper from '../ImagesWrapper/ImagesWrapper';
import ArrowButtons from '../arrowButtons/ArrowButtons';

const ImageContainer =(props) => {
    // const {data} = props;
    // const {currentIndex} = props;
    // const { handleLeftArrowClick } = props;
    // console.log(currentIndex);
    console.log(props);

    return (
        <div className={Classes.ImageContainer}>
            <ArrowButtons leftClick={props.leftClick} rightClick={props.rightClick}/>
            <ImagesWrapper data = {props.data} currentIndex={props.currentIndex}/>
        </div>
    )
}

export default ImageContainer;