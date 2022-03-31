import * as React from "react";
import Demo from "../common/demo";
import TextareaExample from "./textareaExample";
import {scopedClassMaker} from "../../lib/helpers/classes";
import DemoAttributes from "../common/demoAttributes";

const code = require("!!raw-loader!./textareaExample");

const TextareaDemo: React.FunctionComponent = () => {
    const sc = scopedClassMaker("doc");
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
            param: "onChange",
            explanation: "输入框内容变化时的回调",
            type: "function(value)",
            optional: "-",
            default: "-",
        }

    ];
    return <div className={sc("example")}>
        <header className={sc("header")}>
            <h2 className={sc("title")}>Textarea 输入框</h2>
            <p>通过鼠标或键盘输入字符。</p>
        </header>
        <main>
            <div className={sc("use")}>
                <div className={sc("tip")}>使用方法</div>
                <div className={sc("exampleItem")}>
                    <Demo code={code.default}>
                        <TextareaExample/>
                    </Demo>
                </div>
            </div>
            <DemoAttributes attributes={attributes}/>
        </main>
    </div>;
};

export default TextareaDemo;
