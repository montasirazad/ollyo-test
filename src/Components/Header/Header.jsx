import React from 'react';
import './Header.css';

const Header = (props) => {
    const { cart } = props
    return (
        <div 
        className='header-container'
        style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <h5 style={{display:'flex',alignItems:'center',justifyContent:'center',color:'blue'}}> <input type="checkbox" defaultChecked />{cart.length} Files selected</h5>
            <button onClick={() => { window.location.reload() }}>Delete Files</button>
        </div>
    );
};

export default Header;