import * as React from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FunctionComponent<Props> = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};
export default Header;
