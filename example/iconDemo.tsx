import * as React from "react";
import Demo from "./demo";
import IconExample from "./iconExample";

const code = require("!!raw-loader!./iconExample.tsx");

const IconDemo: React.FunctionComponent = () => {
    return (
        <Demo code={code.default}>
            <IconExample/>
        </Demo>
    );
};

export default IconDemo;
