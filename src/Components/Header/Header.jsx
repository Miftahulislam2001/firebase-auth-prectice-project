import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <Link className='header' to="/">Home</Link>
            <Link to="/login">SignIn</Link>
        </div>
    );
};

export default Header;