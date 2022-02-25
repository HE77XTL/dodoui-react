import * as React from "react";
import {Fragment, useState} from "react";
//import {Form, Button, FormValue, FormField} from "hedongsheng-ui-react";
import {Form, Button, FormValue, FormField, Validator} from "../../lib";

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
        {name: 'phone', label: 'phone-比较长的lanel---', input: {type: 'text'}},
    ]);
    const rules = [
        {
            key: 'name',
            required: true,
            message: "必填"
        },
        {
            key: 'name',
            required: true,
            message: "太长",
            maxLength: 8
        },
        {
            key: 'phone',
            message: "太短",
            minLength: 3
        }
    ];
    const onChange = (value: FormValue) => {
        setFormData(value);

    };
    const onSubmit = () => {
        console.log(formData);
        const errors = Validator(formData, rules);
        console.log('errors');
        console.log(errors)
    };
    return (
        <div>
            <Form
                value={formData}
                fields={fields}
                labelWidth={"80px"}
                labelPosition="right"
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
