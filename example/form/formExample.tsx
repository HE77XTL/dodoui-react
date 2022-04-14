import * as React from "react";
import {useState} from "react";
//import {Form, Button, FormValue, FormField} from "hedongsheng-ui-react";
import {Form, FormValue, FormField, Button, Validator, FormErrors} from "../../lib";

const FormExample = () => {
    const [formData, setFormData] = useState<FormValue>({
        name: 'heds',
        age: 18,
        password: 'xxxxx',
    });

    const fields: FormField[] = [
        {name: 'name', label: '用户名', input: {type: 'text'}},
        {name: 'age', label: '年龄', input: {type: 'number'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
        {name: 'profile', label: '简介', input: {type: 'textarea'}},
        {
            name: 'city', label: '城市',
            input: {
                type: 'select',
                options: [
                    {value: '450100', label: '南宁'},
                    {value: '450300', label: '桂林'},
                    {value: '450200', label: '柳州'},
                    ]
            }
        },
    ];


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
            key: 'age',
            required: true,
            message: "必填"
        },
        {
            key: 'password',
            message: "必填",
            required: true,
        }
    ];
    const onChange = (value: FormValue) => {
        console.log('formChagne');
        console.log(value);
        setFormData(value);

    };
    const onSubmit = () => {
        console.log(formData);
        const errors = Validator(formData, rules);
        console.log('errors');
        console.log(errors);
        setErrors(errors);
    };
    return (
        <div>
            <Form
                layout='horizontal'
                value={formData}
                fields={fields}
                labelWidth={"80px"}
                rules={rules}
                errors={errors}
                labelPosition="justify"
                colon={true}
                onChange={onChange}/>
            <div>
                <Button onClick={onSubmit}>提交</Button>
            </div>
        </div>
    );
};
export default FormExample;
