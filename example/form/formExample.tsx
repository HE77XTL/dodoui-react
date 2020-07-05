import * as React from "react";
import {Fragment} from "react";
import DoForm from "../../lib/form/form";
import DoButton from "../../lib/button/button";

const FormExample = () => {
    const formData = {
        password: '',
        username: '',
    };
    const fields = [
        {
            name: 'username',
            label: 'username',
            input: {
                type: 'text'
            }
        },
        {
            name: 'password',
            label: 'password',
            input: {
                type: 'text'
            }
        }
    ];
    return (
        <div>
            <DoForm
                value={formData} fields={fields}
                buttons={
                <Fragment>
                    <DoButton>返回</DoButton>
                    <DoButton>提交</DoButton>
                </Fragment>
            }/>
        </div>
    );
};
export default FormExample;
