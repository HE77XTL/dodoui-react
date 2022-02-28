import * as React from "react";
import {useState} from "react";
//import {Form, Button, FormValue, FormField} from "hedongsheng-ui-react";
import {Form, FormValue, FormField, Button, Validator, FormErrors} from "../../lib";

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

    const [errors, setErrors] = useState<FormErrors>({});

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
        setErrors(errors)
    };
    return (
        <div>
            <Form
                value={formData}
                fields={fields}
                labelWidth={"80px"}
                errors={errors}
                labelPosition="left"
                colon={true}
                onChange={onChange}/>
            <div>
                <Button onClick={onSubmit}>提交</Button>
            </div>
        </div>
    );
};
export default FormExample;
