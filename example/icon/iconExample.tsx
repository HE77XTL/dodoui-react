import * as React from "react";
import {Icon} from "hedongsheng-ui-react";

function IconExample() {
    return (
        <div>
            <Icon name='qq' className='test1' />
            <Icon name='wechat' className='test2 test3'/>
            <Icon name='alipay' className='' onClick={() => {console.log(1)}} />
        </div>
    );
}

export default IconExample;
