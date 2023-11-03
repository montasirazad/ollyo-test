import React from 'react';
import './Card.css';


const Card = (props) => {
    const { data, index, startDrag, dragEnter, handleDragEnd, handleCheck } = props;
    return (
        <div
            className='card-container'

            style={index === 0 ? { width: '180px', flexGrow: '3', height: '180px', border: '1px solid green', margin: '10px', cursor: 'grab', transition: 'all .2s ease-in-out' } :
                { width: '80px', height: '80px', border: '1px solid red', margin: '10px', cursor: 'grab', transition: 'all .2s ease-in-out' }
            }
            key={data.id}
            draggable

            onDragStart={() => startDrag(index)}
            onDragEnter={() => dragEnter(index)}
            onDragEnd={() => handleDragEnd()}
        >
            <label style={{ cursor: 'pointer' }}>
                <input type="checkbox" name="" id="" value={data.id} onClick={(e) => handleCheck(e, data)} />Select
            </label>
            <img src={data.image} alt="" style={index === 0 ? { width: '140px', height: '140px' } : { width: '50px', height: '50px' }} />
        </div>
    );
};

export default Card;