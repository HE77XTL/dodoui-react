import * as React from "react";
import Demo from "../common/demo";
import LayoutExample_1 from "./layoutExample_1";
import LayoutExample_2 from "./layoutExample_2";
import LayoutExample_3 from "./layoutExample_3";
import LayoutExample_4 from "./layoutExample_4";
import {scopedClassMaker} from "../../lib/helpers/classes";

const code_1 = require("!!raw-loader!./layoutExample_1.tsx");
const code_2 = require("!!raw-loader!./layoutExample_2.tsx");
const code_3 = require("!!raw-loader!./layoutExample_3.tsx");
const code_4 = require("!!raw-loader!./layoutExample_4.tsx");
const sc = scopedClassMaker("doc");
const IconDemo: React.FunctionComponent = () => {
    return (
        <div className={sc("example")}>
            <header className={sc("header")}>
                <h2 className={sc("title")}>Layout布局</h2>
                <p>协助进行页面级整体布局。</p>
            </header>
            <main>
                <div className={sc("use")}>
                    <div className={sc("tip")}>使用方法</div>
                    <div className={sc("exampleItem")}>
                        <Demo code={code_1.default}>
                            <LayoutExample_1/>
                        </Demo>
                    </div>
                    <div className={sc("exampleItem")}>
                        <Demo code={code_2.default}>
                            <LayoutExample_2/>
                        </Demo>
                    </div>
                    <div className={sc("exampleItem")}>
                        <Demo code={code_3.default}>
                            <LayoutExample_3/>
                        </Demo>
                    </div>
                    <div className={sc("exampleItem")}>
                        <Demo code={code_4.default}>
                            <LayoutExample_4/>
                        </Demo>
                    </div>
                </div>
                {/*<div className={sc("demoAttributes.tsx")}>*/}
                {/*    Attributes*/}
                {/*</div>*/}
            </main>
        </div>
    );
};

export default IconDemo;
