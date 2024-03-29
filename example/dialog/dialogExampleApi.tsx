import * as React from "react";
import { Button, Dialog} from "hedongsheng-ui-react";
import {scopedClassMaker} from "../../lib/helpers/classes";

const sc = scopedClassMaker("doc");

const DialogExampleApi = () => {
    return (
        <div className={sc('dialog')}>
            <h3>Api</h3>
            <Button size='small' btnType='primary' onClick={() => {Dialog.alert("alert");}}>alert</Button>
            <Button size='small' btnType='primary' onClick={() => {
                Dialog.confirm(<h3>confirm</h3>,
                    () => {console.log("取消");},
                    () => {console.log("确定");});
            }}>
                confirm
            </Button>
            <Button size='small' btnType='primary' onClick={() => {Dialog.model(<h3>model</h3>);}}>
                model
            </Button>
        </div>
    );
};

export default DialogExampleApi;
