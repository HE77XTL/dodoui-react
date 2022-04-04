import * as React from "react";
import Demo from "../common/demo";
import SelectExample from "./selectExample";
import SelectExampleFilter from "./selectExampleFilter";
import {scopedClassMaker} from "../../lib/helpers/classes";
import DemoAttributes from "../common/demoAttributes";

const code = require("!!raw-loader!./selectExample");
const codeFilter = require("!!raw-loader!./selectExampleFilter");
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
            param: "options",
            explanation: "数据化配置选项内容",
            type: "Array\<OptionType\>",
            optional: "-",
            default: "-",
        },
        {
            param: "placeHolder",
            explanation: "占位符",
            type: "string",
            optional: "-",
            default: "请选择",

        },
        {
            param: "onChange",
            explanation: "选中值发生变化时触发",
            type: "function(value)",
            optional: "-",
            default: "-",
        },
        {
            param: "clearable",
            explanation: "是否可以清空选项",
            type: "boolean",
            optional: "-",
            default: "false",
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
                <h2 className={sc("title")}>Select 选择器</h2>
                <p>当选项过多时，使用下拉菜单展示并选择内容。</p>
            </header>
            <main>
                <div className={sc("use")}>
                    <div className={sc("tip")}>使用方法</div>
                    <div className={sc("exampleItem")}>
                        <Demo code={code.default}>
                            <SelectExample/>
                        </Demo>
                    </div>
                    <div className={sc("exampleItem")}>
                        <Demo code={codeFilter.default}>
                            <SelectExampleFilter/>
                        </Demo>
                    </div>
                </div>
                <DemoAttributes attributes={attributes}/>
            </main>
        </div>
    );
};

export default SelectDemo;

