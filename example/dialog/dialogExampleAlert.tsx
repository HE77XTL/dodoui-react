import * as React from "react";
import Dialog from "../../lib/dialog/dialog";
import {useState} from "react";
import DoButton from "../../lib/button/button";
import {scopedClassMaker} from "../../lib/helpers/classes";

const sc = scopedClassMaker("doc");

const DialogExampleAlert = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className={sc('dialog')}>
            <DoButton size='small' btnType='primary' onClick={() => {setVisible(!visible);}}>alert</DoButton>

            <Dialog
                visible={visible}
                onClose={() => {
                    setVisible(false);
                }}
                buttons={
                    [
                        <DoButton size='small' btnType='primary' onClick={() => {setVisible(false);}}>确定</DoButton>
                    ]
                }>
                <div>hi</div>
            </Dialog>
        </div>
    );
};

export default DialogExampleAlert;
