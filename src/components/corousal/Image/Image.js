import React from 'react';
import Classes from './Image.module.css';

const Image = (props) => {
    return (
        <img className = {Classes.Image} src={props.src} loading="lazy" alt={props.alt}/>
    )
}

export default Image;