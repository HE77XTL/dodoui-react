import * as React from "react";
import {Dialog, Button} from "hedongsheng-ui-react";
import {useState} from "react";

import {scopedClassMaker} from "../../lib/helpers/classes";

const sc = scopedClassMaker("doc");

const DialogExampleAlert = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className={sc('dialog')}>
            <Button size='small' btnType='primary' onClick={() => {setVisible(!visible);}}>alert</Button>

            <Dialog
                visible={visible}
                onClose={() => {
                    setVisible(false);
                }}
                buttons={
                    [
                        <Button size='small' btnType='primary' onClick={() => {setVisible(false);}}>确定</Button>
                    ]
                }>
                <div>hi</div>
            </Dialog>
        </div>
    );
};

export default DialogExampleAlert;
