import React from 'react'
import Icon from '../icon'
import * as renderer from 'react-test-renderer'
import {describe, expect, it} from '@jest/globals'

function add(a: number, b: number) {
    return a + b
}

describe('我的第一个测试用例', () => {
    it('add(1,2) 等于3', () => {
        expect(add(1,2)).toEqual(3);
    })
});

describe('icon', () => {
    it('是个 div', () => {
        const json = renderer.create(<Icon/>).toJSON();
        expect(json).toMatchSnapshot()
    })
});
