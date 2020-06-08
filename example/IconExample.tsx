import * as React from "react";
import Icon from "../lib/icon/icon";

const code = require('!!raw-loader!./IconExample.tsx');

function IconExample() {
    return (
        <div>
            <Icon name='qq' className='test1' />
            <Icon name='wechat' className='test2 test3'/>
            <Icon name='alipay' className='' onClick={() => {console.log(1)}} />
            <div>
                <pre>{code.default}</pre>
            </div>
        </div>
    );
}

export default IconExample;
