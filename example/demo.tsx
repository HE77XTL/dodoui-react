import * as React from "react";

interface Props {
    code: string
}

const Demo: React.FunctionComponent<Props> = (props) => {
    console.log(props.code)
    return (
        <div>
            {props.children}
            <pre className='demoCode'>
                {props.code}
            </pre>
        </div>
    );
};

export default Demo;
