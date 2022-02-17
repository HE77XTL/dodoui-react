import * as React from "react";
import {ReactElement} from "react";
import {scopedClassMaker} from "../helpers/classes";
import Aside from "./aside";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import "./layout.less";


interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

interface LayoutInterface extends React.FunctionComponent<Props> {
    Aside: typeof Aside;
    Header: typeof Header;
    Content: typeof Content;
    Footer: typeof Footer;
}

const sc = scopedClassMaker("dodo-layout");
// 判断layout 直接子元素是否有aside
const Layout: LayoutInterface = (props) => {
    const children = props.children as Array<ReactElement>;
    const hasAside = "length" in children &&
        children.reduce((result, node) => {
            return result || node.type === Aside;
        }, false);
    const {className, ...rest} = props;
    return (
        <div className={sc({"": true, hasAside}, className)} {...rest}>
            {children}
        </div>
    );
};

Layout.Aside = Aside;
Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
export {Aside, Header, Content, Footer}
export default Layout;
