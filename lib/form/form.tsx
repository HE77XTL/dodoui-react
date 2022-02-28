import * as React from 'react';
import {ReactNode, Fragment} from 'react';
import './form.less';
import DoInput from "../input/input";
import classes, {scopedClassMaker} from "../helpers/classes";

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
    [K: string]: string[];// 目前只展示第一个错误， 为以后同时展示多个错误做预留
}

export interface FormRule {
    key: string;
    message: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
}

interface Props {
    layout?: 'vertical' | 'horizontal';
    labelPosition?: 'left' | 'right' | 'center' | 'justify',
    labelWidth?: string,
    value: FormValue;
    fields: FormField[];
    onChange: (value: FormValue) => void;
    errors?: FormErrors
}

const Form: React.FunctionComponent<Props> = (props) => {
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

    const labelStyle = function () {
        const widthStyle = props.labelWidth ? {
            width: props.labelWidth
        } : {};
        return {
            ...widthStyle
        }
    };

    const getErrorText = function (key: string) {
        if (props.errors && props.errors[key]) {
            return props.errors[key][0]
        } else {
            return ""
        }
    };


    const horizontalLayout = (
        <table className={sc('table')}>
            <tbody>
            {props.fields.map(f =>
                <Fragment key={f.name}>
                    <tr className={sc('tr')}>
                        <td className={sc('td')}>
                            {props.labelPosition === 'justify'
                                ? <div style={labelStyle()} className={classes(sc('label'), sc(props.labelPosition))}>
                                    <div className={sc('placeholderLabel')}>{f.label}</div>
                                    <div className={sc('labelShow')} >{f.label}</div>
                                </div>
                                : <div style={labelStyle()} className={classes(sc('label'), sc(props.labelPosition))}>
                                    {f.label}
                                </div>}
                        </td>
                        <td className={sc('td')}>
                            {renderInput(f)}
                        </td>
                    </tr>
                    {getErrorText(f.name)
                        ? <tr>
                            <td/>
                            <td>{getErrorText(f.name)}</td>
                        </tr>
                        : null}
                </Fragment>
            )}
            </tbody>
        </table>
    );
    const verticalLayout = <div>
        {props.fields.map(f =>
            <div key={f.name} className={sc('row')}>
                <div style={labelStyle()} className={classes(sc('label'), sc(props.labelPosition))}>{f.label}</div>
                {renderInput(f)}
            </div>
        )}
    </div>;
    return (
        <div className={sc('wrapper')}>
            <form className={sc('', props.layout)}>
                {props.layout === 'horizontal' ?
                    horizontalLayout :
                    verticalLayout
                }
            </form>
        </div>
    );
};

Form.defaultProps = {
    layout: 'horizontal',
    labelPosition: 'right'
};
Form.propTypes = {};

export default Form;
