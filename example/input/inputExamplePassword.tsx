import * as React from "react";
//import {Input} from "hedongsheng-ui-react";
import {Input} from "../../lib/index";
import {scopedClassMaker} from "../../lib/helpers/classes";

const sc = scopedClassMaker("doc");
const InputExamplePassword = () => {
    return (
        <div className={sc("input-wrap")}>
            <div className={'doc-tip'}>密码</div>
            <Input
                clearable={true}
                businessType='password'
                onChange={e => console.log(e.target.value)}
                placeholder='请输入'/>
        </div>
    );
};
export default InputExamplePassword;
