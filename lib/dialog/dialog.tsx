import React, {Fragment, ReactElement} from "react";
import ReactDOM from "react-dom";
import {Icon} from "../index";
import "./dialog.less";
import {scopedClassMaker} from "../helpers/classes";
import DoButton from "../button/button";

interface Props {
    visible: boolean,
    onClose: React.MouseEventHandler,
    buttons?: Array<ReactElement>,
    content?: ReactElement,
    closeOnClickMask?: boolean
}

interface DialogInterface extends React.FunctionComponent<Props> {
    model: typeof model;
    alert: typeof alert;
    confirm: typeof confirm;
}

const sc = scopedClassMaker("dodo-dialog");

const Dialog: DialogInterface = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e);
    };
    const onClickMask: React.MouseEventHandler = (e) => {
        props.closeOnClickMask && props.onClose(e);
    };
    const childrenContent = props.content ? props.content: props.children;
    const result = props.visible &&
        <Fragment>
            <div className={sc("mask")} onClick={onClickMask}/>
            <div className={sc()}>
                <div className={sc("close")} onClick={onClickClose}>
                    <Icon name="close"/>
                </div>
                <header className={sc("header")}>123</header>
                <main className={sc("main")}>
                    {childrenContent}
                </main>
                <footer className={sc("footer")}>
                    {
                        props.buttons && props.buttons.map((button, index) => {
                            return React.cloneElement(button, {key: index});
                        })
                    }
                </footer>
            </div>
        </Fragment>;
    return ( ReactDOM.createPortal(result, document.body))
};

Dialog.defaultProps = {
    closeOnClickMask: true
};

const model = (content: React.ReactNode, buttons?: Array<ReactElement>) => {
    const div = document.createElement("div");
    const close = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    };
    const component = <Dialog onClose={close} visible={true} buttons={buttons}>
        {content}
    </Dialog>;
    document.body.appendChild(div);
    ReactDOM.render(component, div);
    return close;
};

const confirm = (content: React.ReactNode, no?: () => void, yes?: () => void) => {
    const confirm = () => {
        close();
        yes && yes();
    };
    const cancel = () => {
        close();
        no && no();
    };
    const buttons = [
        <DoButton size='small' onClick={cancel}>取消</DoButton>,
        <DoButton size='small' btnType='primary' onClick={confirm}>确定</DoButton>
    ];
    const close = model(content, buttons);
};

const alert = (content: React.ReactNode) => {
    const buttons = [
        <DoButton size='small' btnType='primary' onClick={() => {close();}}>确定</DoButton>
    ];
    const close = model(content, buttons);
};
Dialog.model = model;
Dialog.alert = alert;
Dialog.confirm = confirm;
export {model, alert, confirm};
export default Dialog;
