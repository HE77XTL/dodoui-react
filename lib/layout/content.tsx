import * as React from "react";

interface Props extends React.AllHTMLAttributes<HTMLElement> {}

const Content: React.FunctionComponent<Props> = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default Content;
