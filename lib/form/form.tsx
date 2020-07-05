import * as React from 'react';
import {FormEvent, ReactNode} from 'react';
import './form.less';
import DoInput from "../input/input";
import {scopedClassMaker} from "../helpers/classes";

const sc = scopedClassMaker("dodo-form");


interface FormFieldDefaultRender {
    type: 'text' | 'textarea' | 'number' | 'password';
}

export interface FormField {
    name: string;
    label: string;
    input: (() => ReactNode) | FormFieldDefaultRender;
}

export interface FormValue {
    [K: string]: any;
}

export interface FormErrors {
    [K: string]: string;
}

interface IProps {
    layout?: 'vertical' | 'horizontal' | 'inline';
    value: FormValue;
    fields: FormField[];
    buttons: ReactNode;
    onSubmit: (value: FormValue) => void;
    onChange: (value: FormValue) => void;
}

const Form: React.FunctionComponent<IProps> = (props) => {
    const onInputChange = (name: string, e: any) => {
        props.onChange({...props.value, [name]: e.target.value});
    };
    const renderInput = (field: FormField) =>
        <div className={sc('input-wrapper')} key={field.name}>
            {field.input instanceof Function ?
                field.input() :
                <DoInput value={props.value[field.name]}
                       onChange={onInputChange.bind(null, field.name)}/>}
        </div>;

    const horizontalLayout = (
        <table className={sc('table')}>
            <tbody>
            {props.fields.map(f =>
                <tr key={f.name} className={sc('tr')}>
                    <td className={sc('td')}>
                        <div className={sc('label')}>{f.label}</div>
                    </td>
                    <td className={sc('td')}>
                        {renderInput(f)}
                    </td>
                </tr>
            )}
            <tr>
                <td className={sc('td')}/>
                <td className={sc('td')} colSpan={2}>
                    <div className={sc('buttons')}>
                        {props.buttons}
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    );
    const verticalLayout = <div>
        {props.fields.map(f =>
            <div key={f.name} className={sc('row')}>
                <div className={sc('label')}>{f.label}</div>
                {renderInput(f)}
            </div>
        )}
        <div className={sc('buttons')}>
            {props.buttons}
        </div>
    </div>;
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.onSubmit(props.value);
    };
    return (
        <div className={sc('wrapper')}>
            <form className={sc('', props.layout)} onSubmit={onSubmit}>
                {props.layout === 'horizontal' ?
                    horizontalLayout :
                    verticalLayout
                }
            </form>
        </div>
    );
};

Form.defaultProps = {
    layout: 'horizontal'
};
Form.propTypes = {};

export default Form;
