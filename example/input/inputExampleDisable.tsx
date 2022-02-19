import * as React from "react";
import {Input} from "hedongsheng-ui-react";
import {scopedClassMaker} from "../../lib/helpers/classes";
const sc = scopedClassMaker("doc");
const InputExampleDisable = () => {
    return (
        <div className={sc("input-wrap")}>
            <div className={'doc-tip'}>禁用状态</div>
            <Input
                className={sc("input")}
                disabled={true}
                placeholder='请输入'/>
        </div>
    );
};
export default InputExampleDisable;
