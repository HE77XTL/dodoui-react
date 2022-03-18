import React, {InputHTMLAttributes, useEffect, useRef, useState} from "react";
import Icon from '../../lib/icon/icon';
import classes, {scopedClassMaker} from "../helpers/classes";
import './input.less';

import {isEmpty, getInputInitValue, inputValueType} from "../helpers/utils";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'value' | 'defaultValue'> {
    value?: inputValueType,
    defaultValue?: inputValueType,
    type?: 'text' | 'password' | 'number',
    onChange?: (data: inputValueType) => void,
    clearable?: boolean,
}

const DoInput: React.FunctionComponent<Props> = (props) => {
    const {value, defaultValue, className, ...rest} = props;

    const [vdValue, setVdValue] = useState(getInputInitValue({value, defaultValue}));

    // 用于处理浏览器自带的一些好用的type
    const [inputType, setInputType] = useState(props.type || 'text');
    const [passwordIcon, setPasswordIcon] = useState(props.type === 'password' ? 'hide' : 'show');
    const [clearIconVisible, setClearIconVisible] = useState(getInitIconVisible());
    const refInput = useRef(null);
    const sc = scopedClassMaker("dodo");
    const clearableClass = props.clearable ? 'clearable' : '';

    useEffect(() => {
        if (props.value === undefined || props.value === null) {
            return;
        } else {
            setVdValue(props.value);
        }
    }, [props.value]);


    function onClear() {
        setVdValue('');
        props.onChange && props.onChange("");
        setClearIconVisible(false);
    }

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (props.value === undefined || props.value === null) {
            setVdValue(e.target.value);
        }
        props.onChange && props.onChange(e.target.value);
        setClearIconVisible(props.clearable && !isEmpty(e.target.value));
    }

    function getInitIconVisible() {
        const value = props.defaultValue || props.value;
        return props.clearable && !isEmpty(value);
    }

    function onPasswordEyeToggle() {
        const nextIcon = passwordIcon === 'show' ? 'hide' : 'show';
        setPasswordIcon(nextIcon);
        setInputType(nextIcon === 'hide' ? 'password' : 'text');
    }


    return (
        <div className={classes(sc("input-wrap"))}>
            <input
                {...rest}
                value={vdValue}
                type={inputType}
                ref={refInput}
                className={classes(sc("input"), className, clearableClass)}
                onChange={onInputChange}
            />
            {clearIconVisible
                ? <Icon name="clear"
                        onClick={onClear}
                        className={classes(sc("input-icon"), props.type === 'password' ? sc('password-clear-icon') : '')}/>
                : null}
            {props.type === 'password' ?
                <Icon name={`${passwordIcon === 'show' ? 'eye_open' : 'eye_close'}`}
                      onClick={onPasswordEyeToggle}
                      className={sc("input-icon")}/>
                : null}
        </div>
    );
};

DoInput.defaultProps = {
    type: 'text'
};

export type valueType = inputValueType;

export default DoInput;
