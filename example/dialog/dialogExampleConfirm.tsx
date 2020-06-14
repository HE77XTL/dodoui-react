import * as React from "react";
import Dialog from "../../lib/dialog/dialog";
import {useState} from "react";

const DialogExampleConfirm = () => {
    const [visibleConfirm, setVisibleConfirm] = useState(false);
    return (
        <div>
            <button onClick={() => {setVisibleConfirm(!visibleConfirm);}}>confirm</button>
            <Dialog
                visible={visibleConfirm}
                closeOnClickMask={false}
                onClose={() => {setVisibleConfirm(false);}}
                buttons={
                    [
                        <button onClick={() => {setVisibleConfirm(false);}}>取消</button>,
                        <button onClick={() => {setVisibleConfirm(false);}}>确定</button>
                    ]
                }>
                <h2>hello</h2>
            </Dialog>
        </div>
    );
};

export default DialogExampleConfirm;
