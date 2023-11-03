import React from 'react';
import './Card.css';
import { allIndexStyle, zeroIndexStyle } from '../../cardStyle';


const Card = (props) => {
    const { data, index, startDrag, dragEnter, handleDragEnd, handleCheck } = props;
    return (
        <div
            className={`card-container`}
            style={index === 0 ? zeroIndexStyle : allIndexStyle}
            draggable
            key={data.id}
            onDragStart={() => startDrag(index)}
            onDragEnter={() => dragEnter(index)}
            onDragEnd={() => handleDragEnd()}
        >
            <label>
                <input type="checkbox" name="" id="" value={data.id} onClick={(e) => handleCheck(e, data)} />Select
            </label>
            <img src={data.image} alt="" style={index === 0 ? { width: '140px', height: '140px' } : { width: '50px', height: '50px' }} />
        </div>
    );
};

export default Card;