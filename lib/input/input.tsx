import React, {InputHTMLAttributes, useRef, useState} from "react";
import Icon from '../../lib/icon/icon';
import classes, {scopedClassMaker} from "../helpers/classes";
import './input.less';

import {isEmpty} from "../helpers/utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    clearable?: boolean,
    businessType?: 'password'
}

const DoInput: React.FunctionComponent<Props> = (props) => {
    const [passwordType, setPasswordType] = useState('show');
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
        const nextType = passwordType === 'show' ? 'hide' : 'show';
        setPasswordType(nextType);
    }


    return (
        <div className={classes(sc("input-wrap"))}>
            <input
                {...rest}
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
                <Icon name={`${passwordType === 'show' ? 'eye_open' : 'eye_close'}`}
                      onClick={onPasswordEyeToggle}
                      className={sc("input-icon")}/>
                : null}
        </div>
    );
};

export default DoInput;
