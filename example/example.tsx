import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    HashRouter as Router,
    Route,
    Redirect
} from "react-router-dom";
import "./common/home.less";
import IconDemo from "./icon/iconDemo";
import DialogDemo from "./dialog/dialogDemo";
import LayoutDemo from "./layout/layoutDemo";
import ButtonDemo from "./button/buttonDemo";
import InputDemo from "./input/inputDemo";
import FormDemo from "./form/formDemo";
import ExampleAside from './exampleAside'
import ScaleImageDemo from './scaleImage/scaleImageDemo'
import SelectDemo from './select/selectDemo'
import TextareaDemo from './textarea/textareaDemo'

const logo = require("./common/avatar.jpg").default;


ReactDOM.render(
    <Router>
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
        <div className='dodo-site'>
            <ExampleAside/>
            <main className='dodo-main'>
                <Route path="/" exact={true}>
                    <Redirect to="/icon"/>
                </Route>
                <Route path="/icon" component={IconDemo}/>
                <Route path="/dialog" component={DialogDemo}/>
                <Route path="/layout" component={LayoutDemo}/>
                <Route path="/button" component={ButtonDemo}/>
                <Route path="/input" component={InputDemo}/>
                <Route path="/form" component={FormDemo}/>
                <Route path="/scaleImage" component={ScaleImageDemo}/>
                <Route path="/select" component={SelectDemo}/>
                <Route path="/textarea" component={TextareaDemo}/>
            </main>
            {/*<footer className='dodo-footer'>*/}
            {/*    DoDo UI*/}
            {/*</footer>*/}
        </div>
    </Router>,
    document.getElementById("root")
);
