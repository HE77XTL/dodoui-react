import * as React from "react";
import Demo from "../common/demo";
import DialogExampleAlert from "./dialogExampleAlert";
import DialogExampleConfirm from "./dialogExampleConfirm";
import DialogExampleModel from "./dialogExampleModel";
import DialogExampleApi from "./dialogExampleApi";
import {scopedClassMaker} from "../../lib/helpers/classes";
import DemoAttributes from "../common/demoAttributes";
import './dialogDemo.less'


const codeAlert = require("!!raw-loader!./dialogExampleAlert.tsx");
const codeConfirm = require("!!raw-loader!./dialogExampleConfirm.tsx");
const codeModel = require("!!raw-loader!./dialogExampleModel.tsx");
const codeApi = require("!!raw-loader!./dialogExampleApi.tsx");

const sc = scopedClassMaker("doc");
const attributes = [
    {
        param:"visible",
        explanation:"是否显示 Dialog",
        type:"boolean",
        optional:"—",
        default:"false",
    }
];

const IconDemo: React.FunctionComponent = () => {
    return (
        <div className={sc("example")}>
            <header className={sc("header")}>
                <h2 className={sc("title")}>Dialog 对话框</h2>
                <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
            </header>
            <main>
                <div className={sc("use")}>
                    <div className={sc("tip")}>使用方法</div>
                    <div className={sc("exampleItem")}>
                        <Demo code={codeAlert.default} codeExpand={true}>
                            <DialogExampleAlert/>
                        </Demo>
                    </div>
                    <div className={sc("exampleItem")}>
                        <Demo code={codeConfirm.default}>
                            <DialogExampleConfirm/>
                        </Demo>
                    </div>
                    <div className={sc("exampleItem")}>
                        <Demo code={codeModel.default}>
                            <DialogExampleModel/>
                        </Demo>
                    </div>
                    <div className={sc("exampleItem")}>
                        <Demo code={codeApi.default}>
                            <DialogExampleApi/>
                        </Demo>
                    </div>
                </div>
                <DemoAttributes attributes={attributes}/>
            </main>
        </div>
    );
};

export default IconDemo;
