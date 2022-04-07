import React, {ReactNode, useState} from "react";
import './radio.less';
import classes, {scopedClassMaker} from "../helpers/classes";

type RadioValue = number | string | boolean;

export interface OptionType {
    label: string | number | ReactNode;
    value: string | number;
}

export type OptionInterface = Array<OptionType>

interface Props {
    name?: string,
    value?: RadioValue,
    label?: string | number,
    defaultValue?: RadioValue,
    options?: OptionInterface,
    className?: string,
    disabled?: boolean,
    onChange?: (data: RadioValue, checkedItem?: OptionType) => void,
}

// 自定义模拟 原生radio 获取更一致的样式表现

const Radio: React.FunctionComponent<Props> = (props) => {
    const singleChecked = 'dodo-singleChecked';
    const sc = scopedClassMaker("dodo");
    const {onChange, name = 'radio', options, className, disabled} = props;
    const [currentCheck, setCurrentCheck] = useState(getInitValue());
    const [vdOptions] = useState(getInitOptions());

    function getInitValue(): string | number {
        let vdValue;

        if (props.value === undefined || props.value === null) {
            vdValue = props.defaultValue;
        } else {
            vdValue = props.value;
        }

        if (typeof vdValue === 'boolean') {
            return vdValue ? singleChecked : '';
        } else {
            return vdValue || '';
        }
    }

    function getInitOptions(): OptionInterface {
        if (Array.isArray(options)) {
            return options;
        } else {
            return [getOptionsBySingle()];
        }
    }

    function getOptionsBySingle(): OptionType {
        return {
            label: props.label ? props.label : props.children,
            value: singleChecked,
        };
    }

    function onRadioClick(k: OptionType) {
        setCurrentCheck(currentCheck === k.value ? "" : k.value);
        if (Array.isArray(options)) {
            onChange && onChange(k.value, k);
        } else {
            onChange && onChange(!(currentCheck === k.value));
        }
    }

    return <div className={classes(className, sc('radio'))}>
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

export default Radio;
