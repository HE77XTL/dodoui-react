import * as React from "react";
import {scopedClassMaker} from "../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const sc = scopedClassMaker("dodo-layout");

const Header: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={sc("header", className)} {...rest}>
            {props.children}
        </div>
    );
};
export default Header;
