import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    HashRouter as Router,
    Route, NavLink
} from "react-router-dom";
import "./common/home.less";
import IconDemo from "./icon/iconDemo";
import DialogDemo from "./dialog/dialogDemo";
import LayoutDemo from "./layout/layoutDemo";
import ButtonDemo from "./button/buttonDemo";

const logo = require("./common/avatar.jpg").default;


ReactDOM.render(
    <Router>
        <div className='dodo-site'>
            <header className='dodo-header'>
                <div className='title'>DoDo UI</div>
                <div className='source'>
                    <a href="https://github.com/HE77XTL/dodoui-react"
                       target='_blank'>github</a>
                </div>
                <div className='components'>
                    <img src={logo} alt="avatar" className='avatar'/>
                </div>
            </header>
            <aside className='dodo-aside'>
                <dl className='navList'>
                    <dt className='menuItem'>
                        Basic
                    </dt>
                    <dd>
                        <NavLink to="/icon" className='menuItem' activeClassName='active'>icon</NavLink>
                    </dd>
                    <dd>
                        <NavLink to="/dialog" className='menuItem' activeClassName='active'>dialog</NavLink>
                    </dd>
                    <dd>
                        <NavLink to="/layout" className='menuItem' activeClassName='active'>layout</NavLink>
                    </dd>
                    <dd>
                        <NavLink to="/button" className='menuItem' activeClassName='active'>button</NavLink>
                    </dd>
                </dl>
            </aside>
            <main className='dodo-main'>
                <Route path="/icon" component={IconDemo}/>
                <Route path="/dialog" component={DialogDemo}/>
                <Route path="/layout" component={LayoutDemo}/>
                <Route path="/button" component={ButtonDemo}/>
            </main>
            <footer className='dodo-footer'>
                dodo
            </footer>
        </div>
    </Router>,
    document.getElementById("root")
);
