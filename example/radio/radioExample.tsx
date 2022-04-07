import * as React from "react";
import {Radio} from '../../lib/index';

const RadioExample = () => {
    return <div>
        <Radio value={'B'} options={[
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
