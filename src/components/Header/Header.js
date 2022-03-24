import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href='/home'>Home</a>
                <a href='/shop'>Shop</a>
                <a href='/about'>About</a>
                <a href='/order'>Order</a>
            </div>
        </nav>
    );
};

export default Header;