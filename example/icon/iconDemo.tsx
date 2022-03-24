import * as React from "react";
import Demo from "../common/demo";
import IconExample from "./iconExample";
import {scopedClassMaker} from "../../lib/helpers/classes";
import DemoAttributes from "../common/demoAttributes";


const code = require("!!raw-loader!./iconExample.tsx");
const sc = scopedClassMaker("doc");
const attributes = [
    {
        param:"name",
        explanation:"图标名称",
        type:"string",
        optional:"-",
        default:"-",
    }
];

const IconDemo: React.FunctionComponent = () => {
    return (
        <div className={sc("example")}>
            <header className={sc("header")}>
                <h2 className={sc("title")}>icon 图标</h2>
                <p>提供了一套常用的图标集合。</p>
            </header>
            <main>
                <div className={sc("use")}>
                    <div className={sc("tip")}>使用方法</div>
                    <Demo code={code.default} codeExpand={true}>
                        <IconExample/>
                    </Demo>
                </div>
                <DemoAttributes attributes={attributes}/>
            </main>
        </div>
    );
};

export default IconDemo;
