import React, {CSSProperties, useEffect, useState} from "react";
import './radio.less';
import classes, {scopedClassMaker} from "../helpers/classes";
import {CheckOptionInterface, CheckOptionType} from "../helpers/formUtils";

type RadioValue = number | string | boolean;

interface Props {
    name?: string,
    value?: RadioValue,
    label?: string | number,
    defaultValue?: RadioValue,
    options?: CheckOptionInterface,
    className?: string,
    style?: CSSProperties,
    disabled?: boolean,
    ableUnCheck?: boolean,
    onChange?: (data: RadioValue, checkedItem?: CheckOptionType) => void,
}

// 自定义模拟 原生radio 获取更一致的样式表现

const Radio: React.FunctionComponent<Props> = (props) => {
    const SINGLE_CHECKED = 'dodo-singleChecked';
    const sc = scopedClassMaker("dodo");
    const {defaultValue = '', onChange, name = 'radio', options, className, disabled} = props;
    const [currentCheck, setCurrentCheck] = useState(getInitValue());
    const [vdOptions] = useState(getInitOptions());

    useEffect(() => {
        if (props.value === undefined || props.value === null) {
            return;
        } else {
            if (typeof props.value === 'boolean') {
                setCurrentCheck(props.value ? SINGLE_CHECKED : '');
            } else {
                setCurrentCheck(props.value);
            }
        }
    }, [props.value]);

    function getInitValue(): string | number {
        let vdValue;

        if (props.value === undefined || props.value === null) {
            vdValue = defaultValue;
        } else {
            vdValue = props.value;
        }

        if (typeof vdValue === 'boolean') {
            return vdValue ? SINGLE_CHECKED : '';
        } else {
            return vdValue;
        }
    }

    function getInitOptions(): CheckOptionInterface {
        if (Array.isArray(options)) {
            return options;
        } else {
            return [getOptionsBySingle()];
        }
    }

    function getOptionsBySingle(): CheckOptionType {
        return {
            label: props.label ? props.label : props.children,
            value: SINGLE_CHECKED,
        };
    }

    function onRadioClick(k: CheckOptionType) {
        if (!props.ableUnCheck && currentCheck === k.value) {
            return;
        }
        if (props.value === undefined || props.value === null) {
            setCurrentCheck(currentCheck === k.value ? "" : k.value);
        }
        if (Array.isArray(options)) {
            onChange && onChange(k.value, k);
        } else {
            onChange && onChange(!(currentCheck === k.value));
        }
    }

    return <div className={classes(className, sc('radio'))} style={props.style}>
        <div className={sc('radio-layout-wrap')}>
            {vdOptions.map(k => {
                return <label key={(k.value).toString()}
                              className={classes(sc('radio-item-wrap'),
                                  currentCheck === k.value ? sc('radio-active') : '', disabled ? sc('radio-disabled') : '')}>
                    <input
                        type="radio"
                        name={name}
                        value={k.value}
                        disabled={disabled}
                        onClick={() => {
                            onRadioClick(k);
                        }}
                        className={sc('radio-input')}/>
                    <span className={classes(sc('radio-circle'), currentCheck === k.value ? sc('radio-active') : '')}/>
                    <span className={sc('radio-text')}>{k.label}</span>
                </label>;
            })}
        </div>
    </div>;
};
Radio.defaultProps = {
    ableUnCheck: false
};
export default Radio;
