import * as React from "react";
import {ReactElement} from "react";
import {scopedClassMaker} from "../helpers/classes";
import Aside from "./aside";
import "./layout.less";

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const sc = scopedClassMaker("dodo-layout");
// 判断layout 直接子元素是否有aside
const Layout: React.FunctionComponent<Props> = (props) => {
    const children = props.children as Array<ReactElement>;
    const hasAside = "length" in children &&
        children.reduce((result, node) => {
            return result || node.type === Aside;
        }, false);
    const {className, ...rest} = props;
    console.log(children);
    return (
        <div className={sc({"": true, hasAside}, className)} {...rest}>
            {children}
        </div>
    );
};
export default Layout;
