import React, {useEffect, useState} from "react";
import {Input} from "../../lib/index";
import './select.less';
import classes, {scopedClassMaker} from "../helpers/classes";
import {isEmpty} from "../helpers/utils";
import {SelectValueType, OptionType, OptionInterface, getLabelFromOptions, getInitValue} from "../helpers/formUtils";

type valueType = string | number | undefined;


interface Props {
    defaultValue?: SelectValueType;
    value?: SelectValueType;
    placeHolder?: string | undefined;
    className?: string;
    disabled?: boolean;
    filterable?: boolean;
    options?: OptionInterface;
    onChange?: (data: SelectValueType) => void
    width?: string
    clearable?: boolean
}

const sc = scopedClassMaker("dodo");
const DoSelect: React.FunctionComponent<Props> = (props) => {

    const {value, defaultValue, placeHolder, filterable, options = [], className, onChange, clearable = false} = props;

    const [vdInputValue, setVdInputValue] = useState<SelectValueType>(getLabelFromOptions(getInitValue({
        value,
        defaultValue
    }), options));
    const [vdPlaceholder, setVdPlaceholder] = useState<string | undefined>(placeHolder);
    const [vdOptions, setVdOptions] = useState(options);
    const [optionVisible, setOptionVisible] = useState(false);
    const [currentValue, setCurrentValue] = useState<valueType>(getInitValue({value, defaultValue}));


    useEffect(() => {
        const inputShowText = getLabelFromOptions(value, options);
        setCurrentValue(value);
        setVdPlaceholder(inputShowText.toString());
        setVdInputValue(inputShowText);
    }, [props.value]);


    function getInputValue(value: valueType) {
        if (isEmpty(value)) {
            return '';
        }
        if (!props.options) {
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
            const inputShowText = getLabelFromOptions(data.value, options);
            setCurrentValue(data.value);
            setVdPlaceholder(inputShowText.toString());
            setVdInputValue(inputShowText);
            setOptionVisible(false);
        }
        onChange && onChange(data.value);

    }

    function onInputChange(value: SelectValueType) {
        setVdInputValue(value);
        searchFilter(value || '');
    }

    function onClear() {
        setCurrentValue('');
        setVdPlaceholder(placeHolder);
        setVdInputValue('');
        searchFilter('');

    }


    function searchFilter(inputValue: string | number) {
        const searchOptions = options.filter(k => {
            return k.label.toString().includes(inputValue.toString());
        });
        setVdOptions(searchOptions);
    }

    function componentStyle() {
        interface Styles {
            width?: string;
        }

        let styles: Styles = {};
        if (props.width) {
            styles.width = props.width;
        }
        return styles;
    }

    return (
        <div style={componentStyle()} className={classes(className, sc('select'))}>
            <Input
                value={vdInputValue}
                type="text"
                disabled={props.disabled}
                placeholder={vdPlaceholder}
                clearable={clearable}
                onFocus={() => {
                    setOptionVisible(true);
                    setVdInputValue("");
                    setVdOptions(options);
                }}
                onBlur={() => {
                    setVdInputValue(getInputValue(currentValue));
                    setOptionVisible(false);
                }}
                onClear={onClear}
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
    filterable: false,
    placeHolder: '请选择'
};

export default DoSelect;
