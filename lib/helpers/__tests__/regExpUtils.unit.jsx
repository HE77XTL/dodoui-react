import {isNumberInput, regExpMap} from '../regExpUtils'

describe('isNumber test', () => {
    it('整数', () => {
        const result = isNumberInput('1230');
        expect(result).toEqual(true)
    });
    it('字母', () => {
        const result = isNumberInput('1230ww');
        expect(result).toEqual(false)
    });
    it('小数', () => {
        const result = isNumberInput('1230.789');
        expect(result).toEqual(true)
    });
    it('多个小数点', () => {
        const result = isNumberInput('1230.7.89');
        expect(result).toEqual(false)
    })
});

describe('number regexp test', () => {
    it('数字', () => {
        const result = regExpMap.number.test('213');
        expect(result).toEqual(true);
    });
    it('非数字', () => {
        const result = regExpMap.number.test('213ee');
        expect(result).toEqual(false);
    })
});
