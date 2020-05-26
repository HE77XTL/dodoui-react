import * as React from "react";
import Dialog, {model, alert, confirm} from "../lib/dialog/dialog";
import {useState} from "react";

const DialogExample = () => {
    const [visible, setVisible] = useState(false);
    const [visibleConfirm, setVisibleConfirm] = useState(false);
    const [visibleModel, setVisibleModel] = useState(false);

    return (
        <div>
            <div>
                <div>dialog</div>
                <button onClick={() => {setVisible(!visible);}}>alert</button>
                <button onClick={() => {setVisibleConfirm(!visibleConfirm);}}>confirm</button>
                <button onClick={() => {setVisibleModel(!visibleModel);}}>model</button>
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
                <Dialog
                    visible={visibleModel}
                    onClose={() => {setVisibleModel(false);}}>
                    <h2>hello</h2>
                </Dialog>
            </div>
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
        </div>
    );
};

export default DialogExample;
