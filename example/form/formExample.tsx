import * as React from "react";
import {Fragment, useState} from "react";
import DoForm, {FormField, FormValue} from "../../lib/form/form";
import DoButton from "../../lib/button/button";

const FormExample = () => {
    const [formData, setFormData] = useState<FormValue>({
        name: 'heds',
        age: 18,
        password: 'xxxxx'
    });
    const [fields] = useState<FormField[]>([
        {name: 'name', label: '用户名', input: {type: 'text'}},
        {name: 'age', label: '年龄', input: {type: 'number'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ]);
    const onChange = (value: FormValue) => {
        setFormData(value);
    };
    const onSubmit = () => {
        console.log(formData);
    };
    return (
        <div>
            <DoForm
                value={formData}
                fields={fields}
                onSubmit={onSubmit}
                onChange={onChange}
                buttons={
                    <Fragment>
                        <DoButton size='small'>返回</DoButton>
                        <DoButton size='small' type="submit">提交</DoButton>
                    </Fragment>
                }/>
        </div>
    );
};
export default FormExample;
