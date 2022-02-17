import * as React from "react";
import { Dialog} from "hedongsheng-ui-react";
import {useState} from "react";
import DoButton from "../../lib/button/button";

const DialogExampleModel = () => {
    const [visibleModel, setVisibleModel] = useState(false);
    return (
        <div>
            <DoButton size='small' btnType='primary' onClick={() => {setVisibleModel(!visibleModel);}}>model</DoButton>
            <Dialog
                visible={visibleModel}
                onClose={() => {setVisibleModel(false);}}>
                <h2>hello</h2>
            </Dialog>
        </div>
    );
};

export default DialogExampleModel;
