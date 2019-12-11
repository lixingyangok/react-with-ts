import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/nav.scss';

export const navData = [
    {
        to: '/home',
        name: 'Home',
        // component: React.lazy(
        //     ()=>import('src/pages/home/home.tsx');
        // ),
    },
]

export default function(){
    return <nav>
        <ul>
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
        </ul>
    </nav>;
}
