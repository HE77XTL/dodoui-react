import * as React from "react";
import {Radio} from '../../lib/index';
import {scopedClassMaker} from "../../lib/helpers/classes";

const RadioExample = () => {
    const sc = scopedClassMaker("doc");
    return <div>
        <div className={sc('tip')}>基本使用</div>
        <Radio defaultValue={'B'} options={[
            {
                label: '备选项A',
                value: 'A'
            }, {
                label: '备选项B',
                value: 'B'
            }, {
                label: '备选项C',
                value: 'C'
            }
        ]}/>
    </div>;
};

export default RadioExample;
