import * as React from "react";
import {scopedClassMaker} from "../../lib/helpers/classes";

const sc = scopedClassMaker("doc-attributes");

interface Props {
    attributes: {
        param: string,
        explanation: string,
        type: string,
        optional: string,
        default: string
    }[]
}

const DemoAttributes: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={sc('wrap')}>
            <h3 className={sc('header')}>Attributes</h3>
            <table cellSpacing='0'>
                <thead>
                <tr>
                    <td>参数</td>
                    <td>说明</td>
                    <td>类型</td>
                    <td>可选值</td>
                    <td>默认值</td>
                </tr>
                </thead>
                <tbody>
                {
                    props.attributes.map((attribute, index) => {
                        return (
                            <tr key={index}>
                                <td>{attribute.param}</td>
                                <td>{attribute.explanation}</td>
                                <td>{attribute.type}</td>
                                <td>{attribute.optional}</td>
                                <td>{attribute.default}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default DemoAttributes;
