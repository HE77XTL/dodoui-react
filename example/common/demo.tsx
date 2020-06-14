import * as React from "react";
import Highlight, {defaultProps} from "prism-react-renderer";
import {useState} from "react";

interface Props {
    code: string,
    codeExpand?: boolean
}

const Demo: React.FunctionComponent<Props> = (props) => {
    const initVisible = !!props.codeExpand;
    const [codeVisible, setCodeVisible] = useState(initVisible);
    const codeVisibleToggle = () => {
        setCodeVisible(!codeVisible);
    };
    const codeVisibleClass = codeVisible ? 'expand' : '';
    return (
        <div className='doc-demo'>
            <div className='demoComponent'>
                {props.children}
            </div>
            <div className='demoCode'>
                <div className={`codePanel ${codeVisibleClass}`}>
                    <Highlight {...defaultProps} code={props.code} language="jsx">
                        {({className, style, tokens, getLineProps, getTokenProps}) => (
                            <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({line, key: i})}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({token, key})} />
                                ))}
                            </div>
                        ))}
                    </pre>
                        )}
                    </Highlight>
                    <div className='codeVisible' onClick={codeVisibleToggle}>
                        {codeVisible ? "隐藏代码" : "显示代码"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Demo;
