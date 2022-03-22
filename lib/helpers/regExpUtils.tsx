const regExpMap = {
    number: /^[0-9]+(\.?[0-9]+)?$/,


};

function isNumberInput(value: string) {
    return regExpMap.number.test(value);
}


// 待实现：
// legalNumberRegExp 对于一些产品要求的合法数字输入：
// 1、正数非零开头
// 2、小于1的小数， 只有一个零
// 3、大于于1的小数， 非零开头
// 4、小数不以零结尾（或者多少个零结尾， 有精度要求）
// 等等，，， 由于不同场景的下的需求不同。 具体根据需要实现( 多个正则分开判断更易理解)


export {
    isNumberInput,
    regExpMap,
};
