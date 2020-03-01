import React, { Suspense }  from 'react';
// ▼Router, HashRouter, Match, Route, Link, hashHistory, NavLink, 
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'; 
import Nav, { navData } from 'common/nav/nav';

const App: React.FC = () => {
    return (
        // ▼应用根组件必须要有 <BrowserRouter>
        <BrowserRouter >
            <div className="App" style={{textAlign: 'center'}} >
                <Nav/>
                {/* ▼异步组件父级必须有 Suspense */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {/* 注意：加了exact就不再向下匹配子级路由 */}
                        <Redirect exact from="/" to="/home" />
                        {navData.map((cur, idx)=>{
                            return (
                                <Route path={cur.to} component={cur.component} key={idx}/>
                            );
                        })}
                    </Switch>
                </Suspense>
            </div>
        </BrowserRouter>
    );
};
/*
  ● 有<Switch>标签，则下列其中的<Route>在路径相同的情况下，只匹配第一个，这个可以避免重复匹配；
  ● 无<Switch>标签，则其中的<Route>在路径相同的情况下全都会匹配。更严重的是，还会匹配上级路径的，如下面例子：
    <Switch> 
        <Route path="/Guide" component={ AboutUs } ></Route>
        <Route path="/Guide/ContactUs" component={ ContactUs } ></Route>
        <Route path="/Guide/ContactUs" component={ ContactUs } ></Route>
    </Switch>
*/

export default App;
