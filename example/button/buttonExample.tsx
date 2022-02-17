import { Button} from "hedongsheng-ui-react";
import * as React from "react";
import "./buttonExample.less";

const loading = true;
const ButtonExample = () => {
    return (
        <div className='buttonWrap'>
            <div>
                <Button size='mini' icon='wechat'>mini</Button>
                <Button size='small' icon='wechat'>small</Button>
                <Button icon='wechat'>normal</Button>
                <Button size='large' icon='wechat'>large</Button>
            </div>
            <div>
                <Button btnType='primary'>primary</Button>
                <Button icon='wechat'>icon</Button>
                <Button loading={loading} disabled={loading}>loading</Button>
                <Button btnType='primary' disabled={true}>disabled</Button>
            </div>
        </div>
    );
};

export default ButtonExample;
