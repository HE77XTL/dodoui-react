import * as React from "react";
import { Dialog} from "hedongsheng-ui-react";
import {useState} from "react";
import DoButton from "../../lib/button/button";

const DialogExampleConfirm = () => {
    const [visibleConfirm, setVisibleConfirm] = useState(false);
    return (
        <div>
            <DoButton size='small' btnType='primary' onClick={() => {setVisibleConfirm(!visibleConfirm);}}>confirm</DoButton>
            <Dialog
                visible={visibleConfirm}
                closeOnClickMask={false}
                onClose={() => {setVisibleConfirm(false);}}
                buttons={
                    [
                        <DoButton size='small' onClick={() => {setVisibleConfirm(false);}}>取消</DoButton>,
                        <DoButton size='small' btnType='primary' onClick={() => {setVisibleConfirm(false);}}>确定</DoButton>
                    ]
                }>
                <h2>hello</h2>
            </Dialog>
        </div>
    );
};

export default DialogExampleConfirm;
