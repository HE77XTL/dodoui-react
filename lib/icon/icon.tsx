import React from "react";
import "./icon.less";
import "./importAllIcon";
import classes from '../helpers/classes'

interface IconProps extends React.SVGAttributes<SVGGElement> {
    name: string
}

const Icon: React.FunctionComponent<IconProps> =  ({className,name, ...resetProps}) => {
    return (
        <svg className={classes('dodo-icon', className)} {...resetProps}>
            <use xlinkHref={`#${name}`}/>
        </svg>
    );
};

export default Icon;
