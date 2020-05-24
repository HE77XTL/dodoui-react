import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import IconExample from "./example/IconExample";
import "./example/home.less";

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
                            <Link to="/">Basic</Link>
                        </dt>
                        <dd>
                            <Link to="/icon">icon</Link>
                        </dd>
                    </dl>
                </aside>
                <main className='homeMain'>
                    <Switch>
                        <Route path="/">
                            <div>home</div>
                            <IconExample/>
                        </Route>
                        <Route path="/icon" component={IconExample}/>
                    </Switch>

                </main>
            </div>
        </div>
    </Router>,
    document.getElementById("root")
);
