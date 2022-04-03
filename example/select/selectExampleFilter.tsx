import * as React from "react";
// import {Select, Button} from 'hedongsheng-ui-react'
import {Select} from '../../lib';
import './selectExample.less';
import {scopedClassMaker} from "../../lib/helpers/classes";
import {useState} from "react";


const sc = scopedClassMaker("doc");
const SelectExampleFilter = () => {
    const defaultValue = 'apple';
    const [value, setValue] = useState<string | number>();
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

    function onChange(data: string | number) {
        setValue(data);
    }


    return (
        <div className={sc('select-example')}>
            <div className={'doc-tip'}>可搜索、清空</div>
            <Select
                defaultValue={defaultValue}
                value={value}
                filterable={true}
                clearable={true}
                options={options}
                className={sc('select')}
                onChange={onChange}/>
        </div>
    );
};

export default SelectExampleFilter;
