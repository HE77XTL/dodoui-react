import * as React from "react";
import {Fragment, useState} from "react";
import {Form, Button, FormValue, FormField} from "hedongsheng-ui-react";

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
            <Form
                value={formData}
                fields={fields}
                onSubmit={onSubmit}
                onChange={onChange}
                buttons={
                    <Fragment>
                        <Button size='small'>返回</Button>
                        <Button size='small' type="submit">提交</Button>
                    </Fragment>
                }/>
        </div>
    );
};
export default FormExample;
