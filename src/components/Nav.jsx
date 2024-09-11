// import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <NavLink className='nav-link' to="/">Accueil</NavLink>
            <NavLink className='nav-link' to="/about">À propos</NavLink>            
        </nav>
    );
}

export default Navigation;