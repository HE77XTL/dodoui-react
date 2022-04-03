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
    className?: string
}

// 自定义模拟 原生radio 获取更一致的样式表现

const Radio: React.FunctionComponent<Props> = (props) => {
    const singleChecked = 'dodo-singleChecked';
    const sc = scopedClassMaker("dodo");

    const {name = 'radio', options, className} = props;

    const [currentCheck, setCurrentCheck] = useState(getInitValue());
    const [vdOptions] = useState(getInitOptions());


    function getInitValue(): string | number {
        if (typeof props.value === 'boolean') {
            return props.value ? singleChecked : '';
        } else {
            return props.value || '';
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

    return <div className={classes(className, sc('radio'))}>
        {vdOptions.map(k => {
            return <label key={(k.value).toString()}
                          className={classes(sc('radio-item-wrap'), currentCheck === k.value ? sc('radio-active') : '')}>
                <input type="radio" name={name} value={k.value} onClick={() => {
                    // todo
                    //onClick onChange
                    setCurrentCheck(currentCheck === k.value ? "" : k.value);
                }
                } checked={currentCheck === k.value}/>
                <span>{k.label}</span>
            </label>;
        })}
    </div>;
};

export default Radio;
