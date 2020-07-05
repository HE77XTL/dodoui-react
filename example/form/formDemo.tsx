import * as React from "react";
import Demo from "../common/demo";
import FormExample from "./formExample";
import {scopedClassMaker} from "../../lib/helpers/classes";

const code = require("!!raw-loader!./formExample");
const sc = scopedClassMaker("doc");
const FormDemo: React.FunctionComponent = () => {
    return (
        <div className={sc("example")}>
            <header className={sc("header")}>
                <h2 className={sc("title")}>Form 表单</h2>
                <p>由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据</p>
            </header>
            <main>
                <div className={sc("use")}>
                    <div className={sc("tip")}>使用方法</div>
                    <Demo code={code.default}>
                        <FormExample/>
                    </Demo>
                </div>
                <div className={sc('demoAttributes.tsx')}>
                    Attributes
                </div>
            </main>
        </div>
    );
};

export default FormDemo;
