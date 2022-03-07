import React, {useEffect, useRef, useState} from "react";
import {Input} from "../../lib/index";
import './select.less'
import classes, {scopedClassMaker} from "../helpers/classes";

type valueType = string | number ;

export interface Option {
    label: string;
    value: string | number
}

export type OptionS = Array<Option>


interface Props {
    defaultValue?: valueType;
    value?: valueType;
    className?: string;
    filterable?: boolean;
    options: OptionS;
    onChange: (data: string | number) => void
}

const sc = scopedClassMaker("dodo");
const DoSelect: React.FunctionComponent<Props> = (props) => {
    const inputRef = useRef(null);
    const optionsRef = useRef(null);
    const [inputPlaceHolder, setInputPlaceHolder] = useState<string | undefined>("123");
    const [vdOptions, setVdOptions] = useState(props.options);
    const [optionVisible, setOptionVisible] = useState(false);
    const [currentValue, setCurrentValue] = useState<number | string | undefined>(props.defaultValue || props.value);
    const [inputValue, setInputValue] = useState<number | string>(getInputValue(props.value || props.defaultValue));
    const {filterable, options, className, onChange} = props;


    useEffect(() => {
        if (props.value === undefined) {
            return
        }
        setCurrentValue(props.value);
        setInputValue(getInputValue(props.value));
    }, [props.value]);


    function getInputValue(value: string | number | undefined) {
        const selectItem = props.options.find((k) => {
            return k.value === value
        });
        if (selectItem) {
            return selectItem.label
        } else {
            return ''
        }
    }

    function onOptionClick(data: Option) {
        setCurrentValue(data.value);
        setInputValue(data.label);
        setOptionVisible(false);
        onChange && onChange(data.value);
    }

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(5555)
        console.log(e.target.value)
        setOptionVisible(true);
        const value = e.target.value;
        setInputValue(value);
        searchFilter(value);
    }

    function searchFilter(inputValue: string) {
        const searchOptions = options.filter(k => {
            return k.label.includes(inputValue);
        });
        setVdOptions(searchOptions)
    }

    return (
        <div ref={inputRef} className={classes(className, sc('select'))}>
            <Input
                value={inputValue}
                type="text"
                placeholder={inputPlaceHolder}
                onFocus={() => {
                    setOptionVisible(true);
                    setInputPlaceHolder(getInputValue(currentValue));
                }}
                onBlur={() => {
                    setInputValue(getInputValue(currentValue));


                    setTimeout(()=> {
                        setOptionVisible(false)
                    }, 100)
                }}
                onChange={onInputChange}
                readOnly={!filterable}/>
            <div ref={optionsRef} className={classes(sc('options'), optionVisible ? sc('active') : '')} tabIndex={0}
                 onBlur={() => {
                     setOptionVisible(false)
                 }}>
                <ul className={sc('option-panel')}>
                    {vdOptions.map(item => {
                        return (
                            <li key={item.value}
                                onClick={() => {
                                    onOptionClick(item)
                                }}
                                className={classes(sc('option-item'), currentValue === item.value ? sc('active') : '')}>
                                {item.label}
                            </li>
                        )
                    })}
                    {vdOptions.length === 0 ? <div className={'noDataTips'}>
                        无匹配数据
                    </div> : null}
                </ul>
            </div>
        </div>
    )
};

DoSelect.defaultProps = {
    filterable: false
};

export default DoSelect
