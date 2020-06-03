import * as React from "react";
import {scopedClassMaker} from "../helpers/classes";

interface Props extends React.AllHTMLAttributes<HTMLElement> {}

const sc = scopedClassMaker("dodo-layout");
const Footer: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={sc("footer", className)} {...rest}>
            {props.children}
        </div>
    );
};

export default Footer;
