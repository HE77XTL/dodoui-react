import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    HashRouter as Router,
    Route,
    Link
} from "react-router-dom";
import IconExample from "./example/IconExample";
import "./example/home.less";
import DialogExample from "./example/dialogExample";
import LayoutExample from "./example/layoutExample";

ReactDOM.render(
    <Router>
        <div className='homeDocument'>
            <div>
                <header className='homeHeader'>
                    <div className='title'>DoDo UI</div>
                    <div className='tips'>指南</div>
                    <div className='components'>组件</div>
                </header>
            </div>
            <div className='homeContent'>
                <aside>
                    <dl className='navList'>
                        <dt className='nav'>
                            Basic
                        </dt>
                        <dd>
                            <Link to="/icon">icon</Link>
                        </dd>
                        <dd>
                            <Link to="/dialog">dialog</Link>
                        </dd>
                        <dd>
                            <Link to="/layout">layout</Link>
                        </dd>
                    </dl>
                </aside>
                <main className='homeMain'>
                    <Route path="/icon" component={IconExample}/>
                    <Route path="/dialog" component={DialogExample}/>
                    <Route path="/layout" component={LayoutExample}/>
                </main>
            </div>
        </div>
    </Router>,
    document.getElementById("root")
);
