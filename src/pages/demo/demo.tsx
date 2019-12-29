import React, {Suspense} from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import { Ul } from './style/demo';

export const navData = [{
    to: '/demo/toDoList',
    name: 'To do list',
    component: React.lazy(()=>import('pages/demo/components/todolist/todolist')),
},{
    to: '/demo/chessGame',
    name: 'Chess game',
    component: React.lazy(()=>import('pages/demo/components/chess/chess')),
},{
    to: '/demo/clock',
    name: 'Clock',
    component: React.lazy(()=>import('pages/demo/components/clock/clock')),
},{
    to: '/demo/slider',
    name: 'Slider',
    component: React.lazy(()=>import('pages/demo/components/slider/slider')),
},];

export default class Demo extends React.Component{
    render(){
        return <div className="center-box" data-page="demo" >
            <Ul>
                {navData.map((cur, idx )=>{
                    return <li key={idx}>
                        <NavLink to={cur.to} >{cur.name}</NavLink>
                    </li>
                })}
            </Ul>
            {/*    */}
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Redirect exact from="/demo" to="/demo/toDoList" />
                    {navData.map((cur:{to:string, name:string, component:any}, idx:number)=>{
                        return (
                            <Route
                                path={cur.to}
                                component={cur.component}
                                key={idx}
                            />
                        );
                    })}
                </Switch>
            </Suspense>
        </div>
    }
}
