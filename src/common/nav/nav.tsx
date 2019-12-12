import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/nav.scss';

export const navData = [
    {
        to: '/home',
        name: 'Home',
        component: React.lazy(()=>import('pages/home/home')),
    }, {
        to: '/demo',
        name: 'Demo',
        component: React.lazy(()=>import('pages/demo/demo')),
    }, {
        to: '/about',
        name: 'About',
        component: React.lazy(()=>import('pages/about/about')),
    },
]

export default function(){
    return <nav>
        <ul>
            {
                navData.map((cur, idx)=>{
                    return <li key={idx}>
                        <NavLink to={cur.to}>{cur.name}</NavLink>
                    </li>
                })
            }
        </ul>
    </nav>;
}
