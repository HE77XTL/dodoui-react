import React from 'react';
import classes, {scopedClassMaker} from '../helpers/classes'
import './button.less'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: string,
    btnType?: string,
}

const sc = scopedClassMaker("dodo-button");
const DoButton: React.FunctionComponent<Props> = (props) => {
    const {className, size, btnType, ...rest} = props;
    const classFmt = classes(sc({
        "": true,
        disabled: !!props.disabled
    }), className, size, btnType);

    return (
        <button className={classFmt} {...rest}>btn</button>
    )
};
DoButton.defaultProps = {
    size: 'normal'
};
export default DoButton
