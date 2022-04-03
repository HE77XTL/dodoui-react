import * as React from "react";
import {Radio} from '../../lib/index';

const RadioExample = () => {
    return <div>
        <Radio value={false}>
            heds
        </Radio>
        <div>
            <Radio name={'age'} options={[{
                label: 'age-1',
                value: 19
            }, {
                label: 'age-2',
                value: 30
            }]}/>
        </div>
    </div>;
};

export default RadioExample;
