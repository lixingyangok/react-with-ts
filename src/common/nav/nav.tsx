import React from 'react';
import { NavLink } from 'react-router-dom';
import cpnt from './style/nav';

export const navData = [
    {
        to: '/home',
        name: 'Home',
        component: React.lazy(()=>import('pages/home/home')),
    }, {
        to: '/demo',
        name: 'Practice demo',
        component: React.lazy(()=>import('pages/demo/demo')),
    }, {
        to: '/hook',
        name: 'Learn Hook',
        component: React.lazy(()=>import('pages/hook/hook')),
    }, {
        to: '/about',
        name: 'About',
        component: React.lazy(()=>import('pages/about/about')),
    },
]

export default function(){
    return <cpnt.nav>
        <cpnt.ul>
            {
                navData.map((cur, idx)=>{
                    return <cpnt.li key={idx}>
                        <NavLink to={cur.to}>{cur.name}</NavLink>
                    </cpnt.li>
                })
            }
        </cpnt.ul>
    </cpnt.nav>;
}
