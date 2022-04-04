import * as React from "react";
import {Radio} from '../../lib/index';

const RadioExample = () => {
    return <div>
        <Radio defaultValue={true} disabled={false} onChange={(value) => {
            console.log('value');
            console.log(value);
        }}>
            报名
        </Radio>
        <div>
            <Radio defaultValue={30} value={19} name={'age'} options={[{
                label: 'age-1',
                value: 19
            }, {
                label: 'age-2',
                value: 30
            }]} onChange={(value, item) => {
                console.log('value');
                console.log(value);
                console.log(item);
            }}/>
        </div>
    </div>;
};

export default RadioExample;
