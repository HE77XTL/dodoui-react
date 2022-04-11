import * as React from "react";
import {Checkbox} from '../../lib/index';

const RadioExample = () => {
    return <div>
        <Checkbox options={[{
            label: '备选项A',
            value: 'A'
        }, {
            label: '备选项B',
            value: 'B'
        }, {
            label: '备选项C',
            value: 'C'
        }]} onChange={(...arg) => {
            console.log(arg);
        }}/>
    </div>;
};

export default RadioExample;
