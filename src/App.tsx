import React, { Suspense }  from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// BrowserRouter, Router, HashRouter, Match, Route, Link, hashHistory, NavLink, 
// 
import './App.css';
import Nav from './common/nav/nav';
// src/common/nav/nav.tsx

let aa = React.lazy(() => import( './pages/about/about' ));

const App: React.FC = () => {
    return (
        // ▼应用根组件必须要有 <BrowserRouter>
        <BrowserRouter >
            <div className="App">
                <Nav></Nav>
                {/* ▼异步组件父级必须有 Suspense */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {/* 注意：加了exact就不能匹配子路由 */}
                        <Redirect exact from="/" to="/home" ></Redirect>
                        <Route path="/home" component={ React.lazy(() => import('./pages/home/home')) } ></Route>
                        <Route path="/about" component={ aa } ></Route>
                    </Switch>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}
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
