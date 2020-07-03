import * as React from "react";
import DoForm from "../../lib/form/form";

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
                value={formData} fields={fields}/>
        </div>
    );
};
export default FormExample;
