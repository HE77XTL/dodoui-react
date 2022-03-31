function isEmpty(value: any): boolean {
    return value === "" || value === undefined || value === null;
}

function isNoValue(value: any): boolean {
    return value === undefined || value === null;
}

export {
    isEmpty,
    isNoValue
};
