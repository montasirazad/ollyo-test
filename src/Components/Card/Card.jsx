import React from 'react';
import './Card.css';


const Card = (props) => {
    const { data, index, startDrag, dragEnter, handleDragEnd, handleCheck } = props;
    return (
        <div

            className={`${index === 0 ? 'card-container-zero' : 'card-container'}`}
            draggable
            key={data.id}
            onDragStart={() => startDrag(index)}
            onDragEnter={() => dragEnter(index)}
            onDragEnd={() => handleDragEnd()}
        >
            <label>
                <input type="checkbox" name="" id="" value={data.id} onClick={(e) => handleCheck(e, data)} />Select
            </label>
            <br /> <br />

            <img src={data.image} alt="" />
        </div>
    );
};

export default Card;