import DoButton from '../../lib/button/button'
import * as React from "react";
import './buttonExample.less'

const ButtonExample = () => {
    return (
        <div className='buttonWrap'>
            <DoButton>btn</DoButton>
            <DoButton size='small' btnType='primary'>primary</DoButton>
            <DoButton size='small' btnType='primary' disabled={true}>disabled</DoButton>
        </div>
    )
};

export default ButtonExample
