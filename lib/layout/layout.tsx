import * as React from "react";
import {ReactElement} from "react";
import {scopedClassMaker} from '../helpers/classes'


interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const sc = scopedClassMaker('layout');


const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={sc("",className)} {...rest}>
            {props.children}
        </div>
    );
};
export default Layout;
