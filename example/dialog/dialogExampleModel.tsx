import * as React from "react";
import Dialog from "../../lib/dialog/dialog";
import {useState} from "react";

const DialogExampleModel = () => {
    const [visibleModel, setVisibleModel] = useState(false);
    return (
        <div>
            <button onClick={() => {setVisibleModel(!visibleModel);}}>model</button>
            <Dialog
                visible={visibleModel}
                onClose={() => {setVisibleModel(false);}}>
                <h2>hello</h2>
            </Dialog>
        </div>
    );
};

export default DialogExampleModel;
