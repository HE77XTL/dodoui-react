import * as React from "react";
import {ReactEventHandler, ReactFragment} from "react";
import DoInput from "../input/input";

interface Props {
    value: { [k: string]: any },
    fields: Array<{ name: string, label: string, input: { type: string } }>,
    buttons: ReactFragment,
    onSubmit?: ReactEventHandler
}

const DoForm: React.FunctionComponent<Props> = (props) => {
    const {fields, buttons, ...rest} = props;
    return (
        <form {...rest}>
            {fields.map(item => {
                return (
                    <div key={item.name}>
                        {item.label}
                        <DoInput/>
                    </div>
                );
            })}
            {buttons}
        </form>
    );
};
export default DoForm;
