import * as React from 'react';
import {ReactNode} from 'react';
import './form.less';
import DoInput from "../input/input";
import classes, {scopedClassMaker} from "../helpers/classes";
import {isEmpty} from "../helpers/utils";

const sc = scopedClassMaker("dodo-form");


interface FormFieldDefaultRender {
    type: 'text' | 'number' | 'password';
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

export type FormRules = Array<FormRule>

interface Props {
    layout?: 'vertical' | 'horizontal';
    labelPosition?:  'left' | 'right' | 'center' | 'justify',
    labelWidth?: string,
    value: FormValue;
    fields: FormField[];
    onChange: (value: FormValue) => void;
    rules?: FormRules;
    errors?: FormErrors;
    colon?: boolean,
    hideRequiredAsterisk?: boolean,
}

const Form: React.FunctionComponent<Props> = (props) => {

    const {fields, labelPosition} = props;
    const onInputChange = (name: string, value: any) => {
        props.onChange({...props.value, [name]: value});
    };
    const renderInput = (field: FormField) =>
        <div className={sc('input-wrapper')} key={field.name}>
            {field.input instanceof Function ?
                field.input() :
                <DoInput value={props.value[field.name]}
                         type={field.input.type}
                         onChange={onInputChange.bind(null, field.name)}/>}
        </div>;

    const labelStyle = () => {
        const widthStyle = props.labelWidth ? {
            width: props.labelWidth
        } : {};
        return {
            ...widthStyle
        }
    };

    const getErrorText = (key: string) => {
        if (props.errors && props.errors[key]) {
            return props.errors[key][0]
        } else {
            return ""
        }
    };
    const isError = (key: string) => {
        return props.errors && !isEmpty(props.errors[key])
    };
    const isRule = (key: string): boolean => {
        if (props.rules) {
            return !!props.rules.find((rule) => {
                return rule.key === key
            })
        } else {
            return false
        }

    };

    const horizontalLayout = (
        <div className={sc('wrap')}>
            {fields.map(f => {
                return (
                    <div key={f.name} className={sc('row')}>
                        <div style={labelStyle()}
                             className={classes(sc('label-wrap'), sc(labelPosition), isRule(f.name) ? sc('rule') : '')}>
                            {isRule(f.name) ? <div className={sc('asterisk')}>*</div> : null}
                            {labelPosition === 'justify'
                                ? <div className={sc('label')}>
                                    <div className={sc('placeholder-label')}>{f.label}</div>
                                    <div className={sc('label-show')}>{f.label}</div>
                                </div>
                                : <div className={sc('label')}>
                                    {f.label}
                                </div>}
                            {props.colon ? <div className={sc('colon')}>:</div> : null}
                        </div>
                        <div className={sc('item')}>
                            <div>{renderInput(f)}</div>
                            {isError(f.name)
                                ? <div className={sc('error')}>{getErrorText(f.name)}</div>
                                : null}
                        </div>
                    </div>
                )
            })}
        </div>
    );

    const verticalLayout = (
        <div className={sc('wrap')}>
            {fields.map(f => {
                return (
                    <div key={f.name} className={sc('row')}>
                        <div className={classes(sc('label-wrap'), sc(labelPosition))}>
                            {isRule(f.name) ? <div className={sc('asterisk')}>*</div> : null}
                            <div className={sc('label')}>
                                {f.label}
                            </div>
                            {props.colon ? <div className={sc('colon')}>:</div> : null}
                        </div>
                        <div className={sc('item')}>
                            <div>{renderInput(f)}</div>
                            {isError(f.name)
                                ? <div className={sc('error')}>{getErrorText(f.name)}</div>
                                : null}
                        </div>
                    </div>
                )
            })}
        </div>
    );


    return (
        <div className={sc('wrapper')}>
            <form className={classes(sc(''), sc(props.layout))}>
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
    labelPosition: 'right',
    hideRequiredAsterisk: false,
};
Form.propTypes = {};

export default Form;
