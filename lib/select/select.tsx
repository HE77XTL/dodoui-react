import React, {useEffect, useState} from "react";
import {Input} from "../../lib/index";
import './select.less';
import classes, {scopedClassMaker} from "../helpers/classes";
import {isEmpty, InputValueType} from "../helpers/utils";

type valueType = string | number | undefined;

export interface OptionType {
    label: string | number;
    value: string | number
}

export type OptionInterface = Array<OptionType>


interface Props {
    defaultValue?: valueType;
    value?: valueType;
    placeHolder?: valueType;
    className?: string;
    disabled?: boolean;
    filterable?: boolean;
    options: OptionInterface;
    onChange: (data: valueType) => void
}

const sc = scopedClassMaker("dodo");
const DoSelect: React.FunctionComponent<Props> = (props) => {

    const {filterable, options, className, onChange, value, defaultValue} = props;

    const [vdInputValue, setVdInputValue] = useState<valueType>(getInputValue(getInitValue(value, defaultValue)));
    const [vdPlaceholder, setVdPlaceholder] = useState<string | undefined>(getInitValue(value, defaultValue).toString());
    const [vdOptions, setVdOptions] = useState(options);
    const [optionVisible, setOptionVisible] = useState(false);
    const [currentValue, setCurrentValue] = useState<valueType>(getInitValue(value, defaultValue));


    useEffect(() => {
        console.log('e');
        console.log(value);
        const inputShowText = getInputValue(value);
        setCurrentValue(value);
        setVdPlaceholder(inputShowText);
        setVdInputValue(inputShowText);
    }, [props.value]);

    function getInitValue(value?: valueType, defaultValue?: valueType) {
        if (value === undefined || value === null) {
            return defaultValue || '';
        } else {
            return value;
        }
    }


    function getInputValue(value: valueType) {
        if (isEmpty(value)) {
            return '';
        }
        const selectItem = props.options.find((k) => {
            return k.value === value;
        });
        if (selectItem) {
            return selectItem.label;
        } else {
            return '';
        }
    }

    function onOptionClick(data: OptionType) {
        if (props.value === undefined) {
            const inputShowText = getInputValue(data.value);
            setCurrentValue(data.value);
            setVdPlaceholder(inputShowText);
            setVdInputValue(inputShowText);
            setOptionVisible(false);
        }
        onChange && onChange(data.value);

    }

    function onInputChange(value: InputValueType) {
        setVdInputValue(value);
        searchFilter(value || '');
    }


    function searchFilter(inputValue: string | number) {
        const searchOptions = options.filter(k => {
            return k.label.includes(inputValue);
        });
        setVdOptions(searchOptions);
    }

    return (
        <div className={classes(className, sc('select'))}>
            <Input
                value={vdInputValue}
                type="text"
                disabled={props.disabled}
                placeholder={vdPlaceholder}
                onFocus={() => {
                    setOptionVisible(true);
                    setVdInputValue("");
                    setVdOptions(options);
                }}
                onBlur={() => {
                    setVdInputValue(getInputValue(currentValue));
                    setOptionVisible(false);
                }}
                onChange={onInputChange}
                readOnly={!filterable}/>
            <div className={classes(sc('options'), optionVisible ? sc('active') : '')}>
                <ul className={sc('option-panel')}>
                    {vdOptions.map(item => {
                        return (
                            <li key={item.value}
                                onMouseDown={() => {
                                    onOptionClick(item);
                                }}
                                className={classes(sc('option-item'), currentValue === item.value ? sc('active') : '')}>
                                {item.label}
                            </li>
                        );
                    })}
                    {vdOptions.length === 0 ? <div className={'noDataTips'}>
                        无匹配数据
                    </div> : null}
                </ul>
            </div>
        </div>
    );
};

DoSelect.defaultProps = {
    filterable: false
};

export default DoSelect;
