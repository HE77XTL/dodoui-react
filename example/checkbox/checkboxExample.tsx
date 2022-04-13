import * as React from "react";
import {Checkbox} from '../../lib/index';
import {scopedClassMaker} from "../../lib/helpers/classes";

const RadioExample = () => {
    const sc = scopedClassMaker("doc");
    const options = [
        {
            label: '备选项A',
            value: 'A'
        },
        {
            label: '备选项B',
            value: 'B'
        },
        {
            label: '备选项C',
            value: 'C'
        }
    ];
    return <div>
        <div className={sc('tip')}>基本使用</div>
        <Checkbox options={options}/>
    </div>;
};

export default RadioExample;
