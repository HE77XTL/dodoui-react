import * as React from "react";
import {scopedClassMaker} from "../../lib/helpers/classes";
import Demo from "../common/demo";
import RegionSelectExample from "./regionSelectExample";
// import DemoAttributes from "../common/demoAttributes";

const code = require("!!raw-loader!./regionSelectExample");
const RegionSelectDemo: React.FunctionComponent = () => {
    const sc = scopedClassMaker("doc");
    // const attributes = [{}];
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
            </div>
            {/*<DemoAttributes attributes={attributes}/>*/}
        </main>
    </div>;
};
export default RegionSelectDemo;

