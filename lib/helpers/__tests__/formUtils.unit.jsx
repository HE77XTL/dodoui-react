import {getInitValue} from '../formUtils'

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
