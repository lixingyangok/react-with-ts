import React, {Suspense} from 'react';
import {SmallNav} from 'assets/style/styled-cpnts.js';
import { NavLink, Switch, Route, Redirect  } from 'react-router-dom';
// , Switch, Route, Redirect

// import React, { Suspense } from 'react';
interface oneLink {
    to: string,
    name: string,
    component: object,
}
export const navData:Array<oneLink> = [{
    to: '/hook/useState',
    name: 'useState',
    component: React.lazy(()=>import('pages/hook/children/useState/useState')),
},{
    to: '/hook/useEffect',
    name: 'useEffect',
    component: React.lazy(()=>import('pages/hook/children/useEffect/useEffect')),
},];

export default function(){
    return <div>
        <SmallNav>
            {navData.map((cur:oneLink, idx:number)=>{
                return <li key={idx}>
                    <NavLink to={cur.to}> {cur.name} </NavLink>
                </li>
            })}
        </SmallNav>
        {/*  */}
        {/*  */}
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Redirect exact from="/hook" to="/hook/useState" />
                {navData.map((cur:{to:string, name:string, component:any}, idx:number)=>{
                    return <Route path={cur.to} component={cur.component} key={idx} />;
                })}
            </Switch>
        </Suspense>
    </div>
}