import * as React from "react";
import Demo from "../common/demo";
import ScaleImageExample from "./scaleImageExample";
import {scopedClassMaker} from "../../lib/helpers/classes";
import DemoAttributes from "../common/demoAttributes";

const code = require("!!raw-loader!./scaleImageExample");
const sc = scopedClassMaker("doc");
const InputDemo: React.FunctionComponent = () => {
    const attributes = [
        {
            param: "imgUrl",
            explanation: "图标地址",
            type: "string",
            optional: "-",
            default: "-",
        },
        {
            param: "scale",
            explanation: "宽高比",
            type: "number",
            optional: "-",
            default: "-",
        },
    ];
    return (
        <div className={sc("example")}>
            <header className={sc("header")}>
                <h2 className={sc("title")}>等比动态宽度image</h2>
                <p>常用于宽度动态变化， 图片宽高比固定场景（基于css padding 实现固定宽高）。</p>
            </header>
            <main>
                <div className={sc("use")}>
                    <div className={sc("tip")}>使用方法</div>
                    <div className={sc("exampleItem")}>
                        <Demo code={code.default}>
                            <ScaleImageExample />
                        </Demo>
                    </div>
                </div>
                <DemoAttributes attributes={attributes}/>
            </main>
        </div>
    );
};

export default InputDemo;

