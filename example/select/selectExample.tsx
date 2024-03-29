import * as React from "react";
// import {Select, Button} from 'hedongsheng-ui-react'
import {Select} from '../../lib';
import './selectExample.less';
import {scopedClassMaker} from "../../lib/helpers/classes";

const sc = scopedClassMaker("doc");
const SelectExample = () => {
    const defaultValue = 'apple';
    const options = [
        {
            label: '苹果',
            value: 'apple'
        },
        {
            label: '香蕉',
            value: 'banana'
        },
        {
            label: '橘子',
            value: 'orange'
        },
    ];
    return (
        <div className={sc('select-example')}>
            <div className={'doc-tip'}>基本用法</div>
            <Select
                defaultValue={defaultValue}
                options={options}
                className={sc('select')}/>
        </div>
    );
};

export default SelectExample;
