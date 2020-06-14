import * as React from "react";
import Dialog from "../../lib/dialog/dialog";
import {useState} from "react";

const DialogExampleAlert = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <button onClick={() => {setVisible(!visible);}}>alert</button>

            <Dialog
                visible={visible}
                onClose={() => {
                    setVisible(false);
                }}
                buttons={
                    [
                        <button onClick={() => {setVisible(false);}}>确定</button>
                    ]
                }>
                <div>hi</div>
            </Dialog>
        </div>
    );
};

export default DialogExampleAlert;
