import React, {useState} from "react";

import './radio.less';
import classes, {scopedClassMaker} from "../helpers/classes";

type RadioValue = number | string | boolean;

export interface OptionType {
    label: string | number;
    value: string | number | boolean;
}

export type OptionInterface = Array<OptionType>

interface Props {
    name?: string,
    value?: RadioValue,
    defaultValue?: RadioValue,
    options?: OptionInterface,
    className?: string
}

// 自定义模拟 原生radio 获取更一致的样式表现

const Radio: React.FunctionComponent<Props> = (props) => {
    const sc = scopedClassMaker("dodo");
    const {options, value, className} = props;
    const [vdOptions] = useState(getInitOptions(options));
    const [vdValue] = useState(value);

    function getInitOptions(options?: OptionInterface): OptionInterface {
        return [{
            label: 1,
            value: 1,
        }];
    }

    return <div className={classes(className, sc('radio'))}>
        {vdOptions.map(k => {
            return <label key={(k.value).toString()}
                          className={classes(sc('radio-item-wrap'), vdValue ? sc('radio-active') : '')}>
                <input type="radio" name={'3233'} value={'231'}/>
                dlksfjlkds
            </label>;
        })}

    </div>;
};

export default Radio;
