import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// BrowserRouter, Router, HashRouter, Match, Route, Link, hashHistory, NavLink, 
// 
import './App.css';
import Home from './pages/home/home';
import Msg from './pages/msg/msg';
import Nav from './common/nav/nav';


const App: React.FC = () => {
    return (
        // ▼应用根组件必须要有 <BrowserRouter>
        <BrowserRouter >
            <div className="App">
                <Nav></Nav>
                <Switch>
                    {/* 注意：加了exact就不能匹配子路由 */}
                    <Redirect exact from="/" to="/btn" ></Redirect>
                    <Route path="/btn" component={ Home } ></Route>
                    <Route path="/msg" component={ Msg } ></Route>
                </Switch>
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
