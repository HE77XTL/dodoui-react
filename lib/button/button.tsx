import React from 'react';
import {scopedClassMaker} from '../helpers/classes'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size: string,
}

const sc = scopedClassMaker("dodo-button");
const DoButton: React.FunctionComponent<Props> = (props) => {
    const {className, size, ...rest} = props;
    const classFmt = {
        "": true,
        [size]: true,
        disabled: !!props.disabled
    };

    return (
        <div>
            <button className={sc(classFmt, className)} {...rest}>btn</button>
        </div>
    )
};
DoButton.defaultProps = {
    size: 'normal'
};
export default DoButton
