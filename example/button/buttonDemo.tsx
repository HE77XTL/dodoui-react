import * as React from "react";
import Demo from "../common/demo";
import ButtonExample from "./buttonExample";
import {scopedClassMaker} from "../../lib/helpers/classes";
import DemoAttributes from "../common/demoAttributes";

const code = require("!!raw-loader!./buttonExample.tsx");
const sc = scopedClassMaker("doc");
const attributes = [
    {
        param:"btnType",
        explanation:"图标类型",
        type:"string",
        optional:"danger | primary",
        default:"-",
    },
    {
        param:"size",
        explanation:"图标大小",
        type:"string",
        optional:"mini | small | normal | large ",
        default:"normal",
    },
    {
        param:"icon",
        explanation:"图标名称",
        type:"string",
        optional:"参考icon组件",
        default:"-",
    },
    {
        param:"loading",
        explanation:"设置按钮载入状态",
        type:"boolean",
        optional:"true | false",
        default:"false",
    },
    {
        param:"disabled",
        explanation:"设置按钮是否可用",
        type:"boolean",
        optional:"true | false",
        default:"false",
    },


];
const ButtonDemo: React.FunctionComponent = () => {
    return (
        <div className={sc("example")}>
            <header className={sc("header")}>
                <h2 className={sc("title")}>Button 按钮</h2>
                <p>常用的操作按钮。</p>
            </header>
            <main>
                <div className={sc("use")}>
                    <div className={sc("tip")}>使用方法</div>
                    <Demo code={code.default}>
                        <ButtonExample/>
                    </Demo>
                </div>
                <DemoAttributes attributes={attributes}/>
            </main>
        </div>
    );
};

export default ButtonDemo;
