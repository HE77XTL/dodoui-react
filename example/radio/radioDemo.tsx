import * as React from "react";
import Demo from "../common/demo";
import RadioExample from "./radioExample";
import {scopedClassMaker} from "../../lib/helpers/classes";
import DemoAttributes from "../common/demoAttributes";


const code = require("!!raw-loader!./radioExample.tsx");
const sc = scopedClassMaker("doc");
const attributes = [
    {
        param: "value",
        explanation: "用于设置当前选中的值",
        type: "string | number | boolean",
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
        param: "onChange",
        explanation: "选中值发生变化时触发",
        type: "function(value)",
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

const RadioDemo: React.FunctionComponent = () => {
    return (
        <div className={sc("example")}>
            <header className={sc("header")}>
                <h2 className={sc("title")}>Radio 单选框</h2>
                <p>用于在多个备选项中选中单个状态。</p>
            </header>
            <main>
                <div className={sc("use")}>
                    <div className={sc("tip")}>使用方法</div>
                    <Demo code={code.default} codeExpand={true}>
                        <RadioExample/>
                    </Demo>
                </div>
                <DemoAttributes attributes={attributes}/>
            </main>
        </div>
    );
};

export default RadioDemo;
