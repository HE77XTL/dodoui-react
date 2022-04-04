import * as React from "react";
import Demo from "../common/demo";
import InputExample from "./inputExample";
import InputExampleDisable from "./inputExampleDisable";
import InputExampleClear from "./inputExampleClear";
import InputExamplePassword from "./inputExamplePassword";
import InputExampleNumber from "./inputExampleNumber";
import {scopedClassMaker} from "../../lib/helpers/classes";
import DemoAttributes from "../common/demoAttributes";

const code = require("!!raw-loader!./inputExample");
const codeDisable = require("!!raw-loader!./inputExampleDisable");
const codeClear = require("!!raw-loader!./inputExampleClear");
const codePassword = require("!!raw-loader!./inputExamplePassword");
const codeNumber = require("!!raw-loader!./inputExampleNumber");
const sc = scopedClassMaker("doc");
const InputDemo: React.FunctionComponent = () => {
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
            param: "type",
            explanation: "声明 input 类型",
            type: "string",
            optional: "text | password | number",
            default: "-",
        },
        {
            param: "onChange",
            explanation: "输入框内容变化时的回调",
            type: "function(value)",
            optional: "-",
            default: "-",
        },
        {
            param: "clearable",
            explanation: "可以点击清除图标删除内容",
            type: "boolean",
            optional: "-",
            default: "-",
        },
        {
            param: "onClear",
            explanation: "点击清楚图标时的回调",
            type: "function",
            optional: "-",
            default: "-",
        },
        {
            param: "disabled",
            explanation: "是否禁用",
            type: "boolean",
            optional: "true | false",
            default: "false",
        },




    ];
    return (
        <div className={sc("example")}>
            <header className={sc("header")}>
                <h2 className={sc("title")}>Input 输入框</h2>
                <p>通过鼠标或键盘输入字符。</p>
            </header>
            <main>
                <div className={sc("use")}>
                    <div className={sc("tip")}>使用方法</div>
                    <div className={sc("exampleItem")}>
                        <Demo code={code.default}>
                            <InputExample/>
                        </Demo>
                    </div>
                    <div className={sc("exampleItem")}>
                        <Demo code={codeDisable.default}>
                            <InputExampleDisable/>
                        </Demo>
                    </div>
                    <div className={sc("exampleItem")}>
                        <Demo code={codeClear.default}>
                            <InputExampleClear/>
                        </Demo>
                    </div>
                    <div className={sc("exampleItem")}>
                        <Demo code={codePassword.default}>
                            <InputExamplePassword/>
                        </Demo>
                    </div>
                    <div className={sc("exampleItem")}>
                        <Demo code={codeNumber.default}>
                            <InputExampleNumber/>
                        </Demo>
                    </div>
                </div>
                <DemoAttributes attributes={attributes}/>
            </main>
        </div>
    );
};

export default InputDemo;
