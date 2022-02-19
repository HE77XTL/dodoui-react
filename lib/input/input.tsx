import React, {useState, InputHTMLAttributes, useRef} from "react";
import Icon from '../../lib/icon/icon'
import classes, {scopedClassMaker} from "../helpers/classes";
import './input.less'
import {isEmpty} from "../helpers/utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    clearable?: boolean
}

const DoInput: React.FunctionComponent<Props> = (props) => {
    const refInput = useRef(null);
    const sc = scopedClassMaker("dodo");
    const {className, value = "", onChange, ...rest} = props;
    const clearableClass = props.clearable ? 'clearable' : '';
    const [doValue, setDoValue] = useState(value);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setDoValue(e.target.value);
        onChange && onChange(e)
    }

    function onClear(e: React.MouseEvent<SVGGElement>) {
        if (refInput.current) {
            // click clear icon
            const event = Object.create(e);
            const target = refInput.current ? refInput.current : {};
            event.target = target;
            event.currentTarget = target;
            // @ts-ignore
            target.value = '';
            onChange && onChange(event); // reset target ref value
        }
        setDoValue('')
    }

    return (
        <div className={classes(sc("input-wrap"))}>
            <input
                ref={refInput}
                value={doValue}
                onChange={handleChange}
                className={classes(sc("input"), className, clearableClass)}{...rest}/>
            {props.clearable && !isEmpty(doValue) ?
                <Icon name="clear" onClick={onClear} className={sc("input-clearable-icon")}/> : null}
        </div>
    );
};

export default DoInput;
