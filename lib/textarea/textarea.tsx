import React, {TextareaHTMLAttributes, useEffect, useState} from "react";
import {getInitValue, InputValueType} from "../helpers/formUtils";

import './textarea.less';
import {scopedClassMaker} from "../helpers/classes";


interface Props extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'> {
    value?: InputValueType,
    defaultValue?: InputValueType,
    onChange?: (data: InputValueType) => void,
}

const DoTextarea: React.FunctionComponent<Props> = (props) => {

    const sc = scopedClassMaker("dodo");
    const {value, defaultValue, onChange, ...rest} = props;
    const [vdValue, setVdValue] = useState(getInitValue({value, defaultValue}));

    useEffect(() => {
        if (props.value === undefined || props.value === null) {
            return;
        } else {
            setVdValue(props.value);
        }
    }, [props.value]);

    function onTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        if (props.value === undefined || props.value === null) {
            setVdValue(e.target.value);
        }
        onChange && onChange(e.target.value);
    }

    return <div className={sc('textarea-wrap')}>
        <textarea
            value={vdValue}
            className={sc('textarea')}
            onChange={onTextareaChange}
            {...rest}
        >
        {vdValue}
    </textarea>
    </div>;
};

DoTextarea.defaultProps = {
    cols: 30,
    rows: 10,
};

export default DoTextarea;
