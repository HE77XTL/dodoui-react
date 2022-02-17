import * as React from "react";
import {Input} from "hedongsheng-ui-react";
import {useState} from "react";

const InputExample = () => {
    const [value, setValue] = useState("");
    return (
        <div>
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='请输入'/>
        </div>
    );
};
export default InputExample;
