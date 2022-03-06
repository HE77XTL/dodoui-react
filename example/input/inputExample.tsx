import * as React from "react";
import {Input} from "hedongsheng-ui-react";
import {useState} from "react";
import {scopedClassMaker} from "../../lib/helpers/classes";

const sc = scopedClassMaker("doc");
const InputExample = () => {
    const [value, setValue] = useState("");
    return (
        <div className={sc("input-wrap")}>
            <div className={'doc-tip'}>基本使用</div>
            <Input
                onChange={e => console.log(e.target.value)}
                placeholder='请输入'/>
            <br/>
            <br/>
            <Input
                value={value}
                onChange={(e) => {
                    console.log(setValue(e.target.value))
                }}
                placeholder='请输入'/>
        </div>
    );
};
export default InputExample;
