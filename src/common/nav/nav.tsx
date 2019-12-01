import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/nav.scss';

export default function(){
    return <nav>
        <ul>
            <li>
                <NavLink to="/btn">首页</NavLink>
            </li>
            <li>
                <NavLink to="/msg">关于</NavLink>
            </li>
        </ul>
    </nav>;
}
