import * as React from "react";
import Dialog from "../lib/dialog/dialog";
import {useState} from "react";

const DialogExample = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button onClick={() => {setVisible(!visible);}}>btn</button>
            <Dialog visible={visible}>
                <div>hi</div>
            </Dialog>
        </div>
    );
};

export default DialogExample;
