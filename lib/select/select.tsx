import React, {useEffect, useRef, useState} from "react";
import {Input} from "../../lib/index";
import './select.less'
import classes, {scopedClassMaker} from "../helpers/classes";
import GlobalClickTemp from '../helpers/globalClickTemp/globalClickTemp'

type valueType = string | number;

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
    const [optionVisible, setOptionVisible] = useState(false);
    const [currentValue, setCurrentValue] = useState<number | string | undefined>(props.defaultValue || props.value);
    const [inputValue, setInputValue] = useState<number | string>(getInputValue(props.value || props.defaultValue));
    const {filterable, options, className, onChange} = props;

    useEffect(() => {
        document.body.addEventListener('click', componentOutSideClick);
        return () => {
            document.body.removeEventListener('click', componentOutSideClick)
        }

    }, []);

    useEffect(() => {
        setCurrentValue(props.value);
        setInputValue(getInputValue(props.value));
    }, [props.value]);

    // @ts-ignore
    function componentOutSideClick(e) {
        // @ts-ignore
        const isContainClick = inputRef.current?.contains(e.target);
        if (!isContainClick) {
            setOptionVisible(false)
        }
    }

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
        setInputValue(e.target.value)
    }

    return (
        <div ref={inputRef} className={classes(className, sc('select'))}>
            <Input
                value={inputValue}
                type="text"
                onClick={() => {
                    setOptionVisible(!optionVisible)
                }}
                onChange={onInputChange}
                readOnly={!filterable}/>
            <div className={classes(sc('options'), optionVisible ? sc('active') : '')}>
                <ul className={sc('option-panel')}>
                    {options.map(item => {
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
                </ul>
            </div>
            <GlobalClickTemp onClick={() => {
                if (optionVisible) {
                    setOptionVisible(false)
                }
            }}/>
        </div>
    )
};

DoSelect.defaultProps = {
    filterable: false
};

export default DoSelect
