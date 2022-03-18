import * as React from "react";
//import {Input} from "hedongsheng-ui-react";
import {Input} from "../../lib/index";
import {scopedClassMaker} from "../../lib/helpers/classes";

const sc = scopedClassMaker("doc");
const InputExampleClear = () => {
    return (
        <div className={sc("input-wrap")}>
            <div className={'doc-tip'}>可清空</div>
            <Input
                clearable={true}
                onChange={value => console.log(value)}
                placeholder='请输入'/>
        </div>
    );
};
export default InputExampleClear;
