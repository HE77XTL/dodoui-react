import * as React from "react";
import {model, alert, confirm} from "../../lib/dialog/dialog";
import DoButton from "../../lib/button/button";
import {scopedClassMaker} from "../../lib/helpers/classes";

const sc = scopedClassMaker("doc");

const DialogExampleApi = () => {
    return (
        <div className={sc('dialog')}>
            <div>api</div>
            <DoButton size='small' btnType='primary' onClick={() => {alert("alert");}}>alert</DoButton>
            <DoButton size='small' btnType='primary' onClick={() => {
                confirm("confirm",
                    () => {console.log("取消");},
                    () => {console.log("确定");});
            }}>
                confirm
            </DoButton>
            <DoButton size='small' btnType='primary' onClick={() => {model(<h2>model</h2>);}}>
                model
            </DoButton>
        </div>
    );
};

export default DialogExampleApi;
