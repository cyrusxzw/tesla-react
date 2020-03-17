import React from 'react';
import Logo from '../image/logo-1.svg';
import '../css/header.css';

const Header = () => {
    return(
        <div className="header">
            <img alt="Logo" src={Logo} />
        </div>
    )
}



export default Header;