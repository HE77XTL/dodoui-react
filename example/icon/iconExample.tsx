import * as React from "react";
import {Icon} from "hedongsheng-ui-react";

function IconExample() {
    return (
        <div>
            <Icon name='qq'/>
            <Icon name='wechat'/>
            <Icon name='alipay'/>
            <Icon style={{fontSize: '24px'}} name='dingtalk'/>
        </div>
    );
}

export default IconExample;
