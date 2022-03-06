import * as React from "react";
import {Select} from 'hedongsheng-ui-react'
import './selectExample.less'
import {scopedClassMaker} from "../../lib/helpers/classes";
import {useState} from "react";

const sc = scopedClassMaker("doc");
const SelectExample = () => {
    const [value] = useState('apple')
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
        }
    ];

    function onChange(data: string | number) {
        console.log(data);
    }

    return (
        <div className={sc('select-example')}>
            <Select defaultValue={'orange'} value={value} options={options} className={sc('select')}
                    onChange={onChange}/>
        </div>
    )
};

export default SelectExample
