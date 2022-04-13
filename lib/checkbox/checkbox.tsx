import React, {CSSProperties, useEffect, useState} from "react";
import './checkbox.less';
import {CheckOptionInterface, CheckOptionType} from "../helpers/formUtils";
import classes, {scopedClassMaker} from "../helpers/classes";

export type CheckboxValue = Array<number | string> ;

interface Props {
    name?: string,
    value?: CheckboxValue,
    label?: string | number,
    defaultValue?: CheckboxValue,
    options?: CheckOptionInterface,
    className?: string,
    style?: CSSProperties,
    disabled?: boolean,
    ableUnCheck?: boolean,
    onChange?: (data: CheckboxValue, checkedItems?: CheckOptionInterface) => void,
}

const Checkbox: React.FunctionComponent<Props> = (props) => {
    const sc = scopedClassMaker("dodo");
    const {onChange, className, name = 'checkbox', options = []} = props;

    const [currentCheck, setCurrentCheck] = useState<CheckboxValue>(getInitCheckboxValue(props));

    useEffect(() => {
        if (props.value === undefined || props.value === null) {
            return;
        }
        setCurrentCheck(props.value);
    }, [props.value]);


    function getInitCheckboxValue(props: Props): CheckboxValue {
        if (props.value === undefined || props.value === null) {
            return props.defaultValue || [];
        } else {
            return props.value;
        }
    }

    function onCheckboxClick(selectItem: CheckOptionType) {
        const selectIndex = currentCheck.findIndex((ele) => {
            return ele === selectItem.value;
        });
        let nextSelect = [...currentCheck];
        if (selectIndex === -1) {
            nextSelect.push(selectItem.value);
        } else {
            nextSelect.splice(selectIndex, 1);
        }
        if (props.value === undefined || props.value === null) {
            setCurrentCheck(nextSelect);
        }
        onChange && onChange(nextSelect, getCheckedItemsByChecked(nextSelect));
    }

    function getCheckedItemsByChecked(checked: CheckboxValue): CheckOptionInterface {
        // @ts-ignore
        return checked.map(k => {
            return options.find(item => {
                return item.value === k;
            });
        }).filter(Boolean);
    }


    return <div className={classes(className, sc('checkbox'))}>
        <div className={sc('checkbox-layout-wrap')}>
            {options.map(k => {
                return <label
                    className={classes(sc('checkbox-item-wrap'), currentCheck.includes(k.value) ? sc('checkbox-active') : '')}>
                    <input type="checkbox" name={name} className={sc('checkbox-input')} onClick={() => {
                        onCheckboxClick(k);
                    }}/>
                    <span className={sc('checkbox-square')}/>
                    <span>{k.label}</span>
                </label>;
            })}
        </div>
    </div>;
};
export default Checkbox;
