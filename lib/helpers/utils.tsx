export type inputValueType = string | number | undefined ;

interface InputValueInterface {
    value?: inputValueType
    defaultValue?: inputValueType

}

function isEmpty(value: any): boolean {
    return value === "" || value === undefined || value === null;
}

function getInputInitValue(props: InputValueInterface) {
    if (props.value === undefined || props.value === null) {
        return props.defaultValue || '';
    } else {
        return props.value;
    }
}


export {
    isEmpty,
    getInputInitValue
};
