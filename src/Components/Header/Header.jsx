import React from 'react';
import './Header.css';

const Header = (props) => {
    const { cart } = props
    return (
        <div 
        className='header-container'
        style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <h2>item added:{cart.length}</h2>
            <button onClick={() => { window.location.reload() }}>Delete items</button>
        </div>
    );
};

export default Header;