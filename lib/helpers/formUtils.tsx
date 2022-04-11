import {isEmpty} from "./utils";
import {ReactNode} from "react";


export interface CheckOptionType {
    label: string | number | ReactNode;
    value: string | number;
}

export type CheckOptionInterface = Array<CheckOptionType>

export type InputValueType = string | number | undefined ;
export type SelectValueType = string | number | undefined ;


export interface OptionType {
    label: string | number;
    value: string | number
}

export type OptionInterface = Array<OptionType>

interface InputValueInterface {
    value?: InputValueType
    defaultValue?: InputValueType

}

function getInitValue(props: InputValueInterface): InputValueType {
    if (props.value === undefined || props.value === null) {
        return props.defaultValue || '';
    } else {
        return props.value;
    }
}

function getLabelFromOptions(value: InputValueType, options: OptionInterface): string | number {
    if (isEmpty(value)) {
        return '';
    }
    const selectItem = options.find((k) => {
        return k.value === value;
    });
    if (selectItem) {
        return selectItem.label;
    } else {
        return '';
    }
}


export {
    getInitValue,
    getLabelFromOptions
};
