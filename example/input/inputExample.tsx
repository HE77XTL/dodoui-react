import * as React from "react";
import DoInput from "../../lib/input/input";
import {useState} from "react";

const InputExample = () => {
    const [value, setValue] = useState("");
    return (
        <div>
            <DoInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='请输入'
                className='he'/>
        </div>
    );
};
export default InputExample;
