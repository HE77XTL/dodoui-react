import * as React from "react";
import Demo from "../common/demo";
import SelectExample from "./selectExample";
import {scopedClassMaker} from "../../lib/helpers/classes";
import DemoAttributes from "../common/demoAttributes";

const code = require("!!raw-loader!./selectExample");
const sc = scopedClassMaker("doc");
const SelectDemo: React.FunctionComponent = () => {
    const attributes = [
        {
            param: "value",
            explanation: "输入框内容",
            type: "string | number",
            optional: "-",
            default: "-",
        },
        {
            param: "defaultValue",
            explanation: "输入框默认内容",
            type: "string | number",
            optional: "-",
            default: "-",
        },
        {
            param: "placeHolder",
            explanation: "占位符",
            type: "string",
            optional: "-",
            default: "请选择",

        }
    ];
    return (
        <div className={sc("example")}>
            <header className={sc("header")}>
                <h2 className={sc("title")}>Select 选择器</h2>
                <p>当选项过多时，使用下拉菜单展示并选择内容。</p>
            </header>
            <main>
                <div className={sc("use")}>
                    <div className={sc("tip")}>使用方法</div>
                    <div className={sc("exampleItem")}>
                        <Demo code={code.default}>
                            <SelectExample />
                        </Demo>
                    </div>
                </div>
                <DemoAttributes attributes={attributes}/>
            </main>
        </div>
    );
};

export default SelectDemo;

