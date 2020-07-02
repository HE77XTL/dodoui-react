import React, {InputHTMLAttributes} from "react";
import classes from "../helpers/classes";
import './input.less'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const DoInput: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <div>
            <input
                className={classes("do-input", className)}
                {...rest}/>
        </div>
    );
};

export default DoInput;
