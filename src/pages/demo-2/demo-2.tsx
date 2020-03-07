import React from 'react';
import { NavLink, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Menu } from 'antd';

const navData = [{
    to: '/demo-2/dealWithForm',
    name: 'dealWithForm',
    component: React.lazy(
        ()=>import('pages/demo-2/children/about-form/about-form'),
    ),
},{
    to: '/demo-2/other',
    name: 'other',
    component: React.lazy(
        ()=>import('pages/demo-2/children/other/other'),
    ),
}];

// export default 
function Abc ( props:any ){
    console.log( props );
    const [current, setCurrent] = React.useState( props.location.pathname );
    const handleClick = ( ev:any )=>{
        setCurrent(ev.key);
    }

    return <div className="center-box">
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
            {navData.map(
                (
                    cur: {to:string, name:string, component:any},
                    idx: number,
                )=>{
                    return <Menu.Item key={cur.to}>
                        <NavLink to={cur.to} >
                            {cur.name}
                        </NavLink>
                    </Menu.Item>
                }
            )}
        </Menu>
        <br/>
        <br/>
        <React.Suspense fallback={<div>Loading...</div>} >
            <Switch>
                <Redirect exact from="/demo-2" to="/demo-2/dealWithForm" />
                {navData.map(
                    (
                        cur: {to:string, name:string, component:any},
                        idx: number,
                    )=>{
                        return <Route
                            path={cur.to}
                            component={cur.component}
                            key={idx}
                        />
                    },
                )}
            </Switch>
        </React.Suspense>
    </div>
}

// export default Abc;
export default withRouter( Abc );