import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    HashRouter as Router,
    Route, NavLink
} from "react-router-dom";
import "./example/home.less";
import DialogExample from "./example/dialogExample";
import LayoutExample from "./example/layoutExample";
import IconDemo from "./example/iconDemo";

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
                    <img src="./example/avatar.jpg" alt="avatar" className='avatar'/>
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
                </dl>
            </aside>
            <main className='dodo-main'>
                <Route path="/icon" component={IconDemo}/>
                <Route path="/dialog" component={DialogExample}/>
                <Route path="/layout" component={LayoutExample}/>
            </main>
            <footer className='dodo-footer'>
                dodo
            </footer>
        </div>
    </Router>,
    document.getElementById("root")
);
