import React from 'react';
import './App.css';
const Card = (props) => {
    const classs='card' + props.className;
    return (
        <div className='NotInput'>
            {props.children}
        </div>
    );
}

export default Card;
