import * as React from "react";
import Demo from "../common/demo";
import TextareaExample from "./textareaExample";
import {scopedClassMaker} from "../../lib/helpers/classes";

const code = require("!!raw-loader!./textareaExample");

const TextareaDemo: React.FunctionComponent = ()=> {
    const sc = scopedClassMaker("doc");
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
            <div className={sc('demoAttributes.tsx')}>
                Attributes
            </div>
        </main>
    </div>
};

export default TextareaDemo
