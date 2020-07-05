import * as React from "react";
import {Fragment, useState} from "react";
import DoForm, {FormValue} from "../../lib/form/form";
import DoButton from "../../lib/button/button";

const FormExample = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: 'heds',
        password: '123',
    });
    const fields = [
        {
            name: 'username',
            label: 'username',
            input: {
                type: 'text',
                value: ""
            }
        },
        {
            name: 'password',
            label: 'password',
            input: {
                type: 'text',
                value: ""
            }
        }
    ];
    return (
        <div>
            <DoForm
                value={formData} fields={fields}
                onSubmit={(e) => {
                    console.log(e)
                    console.log(11)
                    console.log(formData)
                }}
                onChange={(newFormData: FormValue) => {
                    setFormData(newFormData)
                }}
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
