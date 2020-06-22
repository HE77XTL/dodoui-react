import React, {Fragment} from "react";
import classes, {scopedClassMaker} from "../helpers/classes";
import Icon from "../icon/icon";
import "./button.less";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: string,
    btnType?: string,
    icon?: string,
    loading?: boolean,
    iconFill?: string, // iocn 颜色（icon 组件待完善）
}

// loading 和icon 互斥

const sc = scopedClassMaker("dodo-button");
const iconSc = scopedClassMaker("dodo-icon");
const DoButton: React.FunctionComponent<Props> = (props) => {
    const {className, size, btnType, ...rest} = props;
    const content = typeof props.children === "string" ?
            <span>{props.children}</span> : props.children;
    const iconName = props.loading ? "loading" : props.icon;
    const icon = iconName && <Icon name={iconName} className={iconSc({loading: !!props.loading})}/>;
    const btnInner = <Fragment>{icon}{content}</Fragment>;
    const classFmt = classes(sc({
        "": true,
        disabled: !!props.disabled,
    }), className, size, btnType);
    return (
        <button
            className={classFmt}
            disabled={props.disabled}
            {...rest}>
            {btnInner}
        </button>
    );
};
DoButton.defaultProps = {
    size: "normal"
};
export default DoButton;
