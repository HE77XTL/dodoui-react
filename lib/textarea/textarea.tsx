import React, {TextareaHTMLAttributes, useState} from "react";
import {getInitValue, InputValueType} from "../helpers/formUtils";

import './textarea.less'
import {scopedClassMaker} from "../helpers/classes";



interface Props extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'> {
    value?: InputValueType,
    defaultValue?: InputValueType,

}

const DoTextarea: React.FunctionComponent<Props> = (props) => {
    const sc = scopedClassMaker("dodo");
    const {value, defaultValue} = props;
    const [vdValue, setVdValue] = useState(getInitValue({value, defaultValue}));

    function onTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        console.log('onTextareaChange');
        console.log(e);
    }

    return <div className={sc('textarea-wrap')}>
        <textarea className={sc('textarea')} cols={30} rows={10} onChange={onTextareaChange}>
        {vdValue}
    </textarea>
    </div>
};

export default DoTextarea;
