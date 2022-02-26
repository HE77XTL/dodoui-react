import * as React from "react";
import Demo from "../common/demo";
import ScaleImageExample from "./scaleImageExample";
import {scopedClassMaker} from "../../lib/helpers/classes";

const code = require("!!raw-loader!./scaleImageExample");
const sc = scopedClassMaker("doc");
const InputDemo: React.FunctionComponent = () => {
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
                <div className={sc('demoAttributes.tsx')}>
                    Attributes
                </div>
            </main>
        </div>
    );
};

export default InputDemo;

