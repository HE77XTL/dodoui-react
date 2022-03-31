import * as React from "react";
//import {Input} from "hedongsheng-ui-react";
import {Input, valueType} from "../../lib/index";
import {useState} from "react";
import {scopedClassMaker} from "../../lib/helpers/classes";

const sc = scopedClassMaker("doc");
const InputExample = () => {
    const [value, setValue] = useState<valueType>("");
    return (
        <div className={sc("input-wrap")}>
            <div className={sc('tip')}>基本使用</div>
            <Input
                value={value}
                onChange={(value) => {
                    setValue(value);
                }}
                placeholder='请输入'/>
        </div>
    );
};
export default InputExample;
