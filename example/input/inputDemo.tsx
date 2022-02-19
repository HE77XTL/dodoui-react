import * as React from "react";
import Demo from "../common/demo";
import InputExample from "./inputExample";
import InputExampleDisable from "./inputExampleDisable";
import InputExampleClear from "./inputExampleClear";
import {scopedClassMaker} from "../../lib/helpers/classes";

const code = require("!!raw-loader!./inputExample");
const codeDisable = require("!!raw-loader!./inputExampleDisable");
const sc = scopedClassMaker("doc");
const InputDemo: React.FunctionComponent = () => {
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
                        <Demo code={codeDisable.default}>
                            <InputExampleClear/>
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
