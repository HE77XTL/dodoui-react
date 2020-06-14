import * as React from "react";
import {model, alert, confirm} from "../../lib/dialog/dialog";

const DialogExampleApi = () => {
    return (
        <div>
            <div>api</div>
            <button onClick={() => {alert("alert");}}>alert</button>
            <button onClick={() => {
                confirm("confirm",
                    () => {console.log("取消");},
                    () => {console.log("确定");});
            }}>
                confirm
            </button>
            <button onClick={() => {model(<h2>model</h2>);}}>
                model
            </button>
        </div>
    );
};

export default DialogExampleApi;
