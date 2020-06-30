// import * as React from "react";
// import InputExample from "./inputExample";
//
// const InputDemo = () => {
//     return (
//         <div>
//             <InputExample/>
//         </div>
//     );
// };
// export default InputDemo;
//
//
//

import * as React from "react";
import Demo from "../common/demo";
import InputExample from "./inputExample";
import {scopedClassMaker} from "../../lib/helpers/classes";

const code = require("!!raw-loader!./inputExample");
const sc = scopedClassMaker("doc");
const InputDemo: React.FunctionComponent = () => {
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
                        <InputExample/>
                    </Demo>
                </div>
                <div className={sc('attributes')}>
                    Attributes
                </div>
            </main>
        </div>
    );
};

export default InputDemo;
