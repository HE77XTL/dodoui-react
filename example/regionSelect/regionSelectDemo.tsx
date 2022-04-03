import * as React from "react";
import {scopedClassMaker} from "../../lib/helpers/classes";
import Demo from "../common/demo";
import RegionSelectExample from "./regionSelectExample";
import RegionSelectExampleLevel from "./regionSelectExampleLevel";
import DemoAttributes from "../common/demoAttributes";

const code = require("!!raw-loader!./regionSelectExample");
const codeLevel = require("!!raw-loader!./regionSelectExampleLevel");
const RegionSelectDemo: React.FunctionComponent = () => {
    const sc = scopedClassMaker("doc");

    const attributes = [
        {
            param: "value",
            explanation: "省市区编码",
            type: "object",
            optional: "-",
            default: "-",
        },
        {
            param: "onChange",
            explanation: "选中时调用",
            type: "function(value)",
            optional: "-",
            default: "-",
        },
        {
            param: "level",
            explanation: "省市区级数",
            type: "number",
            optional: "1 | 2 | 3",
            default: "3",
        }
    ];
    return <div className={sc("example")}>
        <header className={sc("header")}>
            <h2 className={sc("title")}>省市区联动选择</h2>
            <p>常用于地区选择，最多支持省、市、区三级</p>
        </header>
        <main>
            <div className={sc("use")}>
                <div className={sc("tip")}>使用方法</div>
                <div className={sc("exampleItem")}>
                    <Demo code={code.default}>
                        <RegionSelectExample/>
                    </Demo>
                </div>
                <div className={sc("exampleItem")}>
                    <Demo code={codeLevel.default}>
                        <RegionSelectExampleLevel/>
                    </Demo>
                </div>
            </div>
            <DemoAttributes attributes={attributes}/>
        </main>
    </div>;
};
export default RegionSelectDemo;

