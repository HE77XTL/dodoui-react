import React, {InputHTMLAttributes} from "react";
import classes from "../helpers/classes";
import './input.less'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const DoInput: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <input
            className={classes("do-input", className)}
            {...rest}/>
    );
};

export default DoInput;
