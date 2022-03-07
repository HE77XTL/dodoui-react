import * as React from "react";
// import {Select} from 'hedongsheng-ui-react'
import {Select} from '../../lib'
import './selectExample.less'
import {scopedClassMaker} from "../../lib/helpers/classes";
import {useState} from "react";


const sc = scopedClassMaker("doc");
const SelectExample = () => {
    const initOptions = [
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
        {
            label: '1',
            value: '1'
        },
        {
            label: '2',
            value: '2'
        },
        {
            label: '3',
            value: '3'
        },
    ];

    const [options,setOptions] = useState(initOptions);




    function onChange(data: string | number) {
        console.log('data----');
        console.log(data);
    };


    function changeOptionsTest() {
        setOptions([
            {
                label: '苹果',
                value: 'apple'
            },
            {
                label: '香蕉',
                value: 'banana'
            },
            {
                label: '葡萄',
                value: 'Grape'
            },
        ])
    }

    return (
        <div className={sc('select-example')}>
            <Select
                filterable={true}
                options={options}
                className={sc('select')}
                onChange={onChange}/>
                <div>
                    <button onClick={changeOptionsTest}>change options123</button>
                </div>
        </div>
    )
};

export default SelectExample
