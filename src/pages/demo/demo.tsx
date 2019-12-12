import React from 'react';
import './style/demo.scss';

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

export default class Demo extends React.Component{
    render(){
        return <div className="center-box" data-page="demo" >
            <ul>
                {
                    navData.map((cur, idx )=>{
                        return <li key={idx}>
                            {cur.to}
                        </li>
                    })
                }
            </ul>
        </div>
    }
}