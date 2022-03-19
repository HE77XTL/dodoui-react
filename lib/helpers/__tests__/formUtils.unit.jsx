import {getInitValue, getLabelFromOptions} from '../formUtils'

describe('getInitValueTest', () => {
    it('value, defaultValue 均为空', () => {
        const result = getInitValue({value: undefined, defaultValue: undefined});
        expect(result).toEqual('')
    });
    it('value 有值, defaultValue 为空', () => {
        const result = getInitValue({value: 'heds', defaultValue: undefined});
        expect(result).toEqual('heds')
    });
    it('value 有值, defaultValue 有值， 应返回value', () => {
        const result = getInitValue({value: 'heds', defaultValue: 'zoro'});
        expect(result).toEqual('heds')
    });
    it('value 为空, defaultValue 有值， 应返回defaultValue', () => {
        const result = getInitValue({value: undefined, defaultValue: 'zoro'});
        expect(result).toEqual('zoro')
    });
});

describe('getLabelFromOptionsTest', () => {
    const options = [
        {
            label: '123',
            value: 123,
        }
    ];

    it('获取label, value 有值', () => {
        const result = getLabelFromOptions(123, options);
        expect(result).toEqual('123')
    });
    it('获取label, value 为空', ()=> {
        const result = getLabelFromOptions('', options);
        expect(result).toEqual('')
    });
    it('获取label, value 有值， options 没有对应值', ()=> {
        const result = getLabelFromOptions(1233, options);
        expect(result).toEqual('')
    })
});
