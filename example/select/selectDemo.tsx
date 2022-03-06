import * as React from "react";
import Demo from "../common/demo";
import SelectExample from "./selectExample";
import {scopedClassMaker} from "../../lib/helpers/classes";

const code = require("!!raw-loader!./selectExample");
const sc = scopedClassMaker("doc");
const SelectDemo: React.FunctionComponent = () => {
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
                            <SelectExample />
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

export default SelectDemo;

