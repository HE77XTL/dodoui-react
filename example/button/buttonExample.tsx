import DoButton from '../../lib/button/button'
import * as React from "react";
import {scopedClassMaker} from "../../lib/helpers/classes";
import './buttonExample.less'

const sc = scopedClassMaker("doc");
const ButtonExample = () => {
    return (
        <div className={sc('buttonWrap')}>
            <DoButton className={sc('button')}/>
            <DoButton size='small' btnType='primary' className={sc('button')}/>
        </div>
    )
};

export default ButtonExample
