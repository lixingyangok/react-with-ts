import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/nav.scss';

export default function(){
    return <nav>
        <ul>
            <li>
                <NavLink to="/btn">Home</NavLink>
            </li>
            <li>
                <NavLink to="/msg">About</NavLink>
            </li>
        </ul>
    </nav>;
}
