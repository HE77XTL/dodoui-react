import React, {HTMLAttributes} from "react";
import './globalClickTemp.less'
import classes, {scopedClassMaker} from "../classes";


interface Props extends HTMLAttributes<HTMLElement> {

}

const sc = scopedClassMaker("dodo");

const GlobalClickTemp: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return <div className={classes(className, sc('global-click-temp'))} {...rest}/>
};

export default GlobalClickTemp
