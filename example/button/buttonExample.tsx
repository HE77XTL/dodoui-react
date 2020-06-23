import DoButton from "../../lib/button/button";
import * as React from "react";
import "./buttonExample.less";

const loading = true;
const ButtonExample = () => {
    return (
        <div className='buttonWrap'>
            <div>
                <DoButton size='mini' icon='wechat'>mini</DoButton>
                <DoButton size='small' icon='wechat'>small</DoButton>
                <DoButton icon='wechat'>normal</DoButton>
                <DoButton size='large' icon='wechat'>large</DoButton>
            </div>
            <div>
                <DoButton btnType='primary'>primary</DoButton>
                <DoButton icon='wechat'>icon</DoButton>
                <DoButton loading={loading} disabled={loading}>loading</DoButton>
                <DoButton btnType='primary' disabled={true}>disabled</DoButton>
            </div>
        </div>
    );
};

export default ButtonExample;
