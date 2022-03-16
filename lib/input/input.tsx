import React, {InputHTMLAttributes, useRef, useState} from "react";
import Icon from '../../lib/icon/icon';
import classes, {scopedClassMaker} from "../helpers/classes";
import './input.less';

import {isEmpty} from "../helpers/utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    clearable?: boolean,
    // 不用原生的type, 根据自己的实际项目去不断扩充
    businessType?: 'password'
}

const DoInput: React.FunctionComponent<Props> = (props) => {
    // 用于处理浏览器自带的一些好用的type
    const [inputType, setInputType] = useState('text');
    const [passwordIcon, setPasswordIcon] = useState('show');
    const [clearIconVisible, setClearIconVisible] = useState(getInitIconVisible());
    const refInput = useRef(null);
    const sc = scopedClassMaker("dodo");
    const {className, onChange, ...rest} = props;
    const clearableClass = props.clearable ? 'clearable' : '';


    function onClear(e: React.MouseEvent<SVGGElement>) {
        console.log(8888);
        if (refInput && refInput.current) {
            // @ts-ignore
            refInput.current.value = '';
            console.log(8989);
            setClearIconVisible(false);
        }
    }

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        onChange && onChange(e);
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
                type={inputType}
                ref={refInput}
                className={classes(sc("input"), className, clearableClass)}
                onChange={onInputChange}
            />
            {clearIconVisible
                ? <Icon name="clear"
                        onClick={onClear}
                        className={classes(sc("input-icon"), props.businessType === 'password' ? sc('password-clear-icon') : '')}/>
                : null}
            {props.businessType === 'password' ?
                <Icon name={`${passwordIcon === 'show' ? 'eye_open' : 'eye_close'}`}
                      onClick={onPasswordEyeToggle}
                      className={sc("input-icon")}/>
                : null}
        </div>
    );
};

export default DoInput;
