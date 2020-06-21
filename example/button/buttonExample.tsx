import DoButton from '../../lib/button/button'
import * as React from "react";
import './buttonExample.less'

const ButtonExample = () => {
    return (
        <div className='buttonWrap'>
            <DoButton/>
            <DoButton size='small' btnType='primary'/>
        </div>
    )
};

export default ButtonExample
