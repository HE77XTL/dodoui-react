import * as React from "react";
import {ReactEventHandler, ReactFragment} from "react";
import DoInput from "../input/input";
import './form.less'

import {scopedClassMaker} from "../helpers/classes";


const sc = scopedClassMaker("dodo-form");

export interface FormValue {
    [k: string]: any
}

interface Props extends React.HTMLAttributes<HTMLElement> {
    value: FormValue,
    fields: Array<{ name: string, label: string, input: { type: string, value: string } }>,
    buttons: ReactFragment,
    onSubmit?: ReactEventHandler,
    onChange: (value: FormValue) => void;
}

const DoForm: React.FunctionComponent<Props> = (props) => {
    const formData = Object.assign({},props.value);
    const {fields, buttons, className, ...rest} = props;
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        e.persist();
        props.onSubmit && props.onSubmit(e)
    };
    const onInputChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        console.log('name')
        console.log(name)
        const newFormData = {formData, [name]: e.target.value};
        props.onChange(newFormData)
    };
    return (
        <form className={sc("", className)} {...rest} onSubmit={onSubmit}>
            <table>
                <tbody>
                {fields.map(item => {
                    return (
                        <tr key={item.name}>
                            <td>{item.label}</td>
                            <td>
                                <DoInput
                                    value={formData[item.name]}
                                    type={item.input.type}
                                    onChange={onInputChange.bind(null, item.name)}/>
                            </td>
                        </tr>
                    )
                })}
                <tr>
                    <td/>
                    <td>{buttons}</td>
                </tr>
                </tbody>
            </table>
        </form>
    );
};
export default DoForm;
