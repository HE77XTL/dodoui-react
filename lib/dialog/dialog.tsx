import React, {Fragment, ReactElement} from "react";
import ReactDOM from "react-dom";
import {Icon} from "../index";
import "./dialog.less";
import {scopedClassMaker} from "../helpers/classes";


// 一身清贫怎敢入繁华,二袖清风怎敢误佳人，罢了罢了

interface Props {
    visible: Boolean,
    onClose: React.MouseEventHandler,
    buttons?: Array<ReactElement>,
    closeOnClickMask?: Boolean
}

const sc = scopedClassMaker("dodo-dialog");

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e);
    };
    const onClickMask: React.MouseEventHandler = (e) => {
        props.closeOnClickMask && props.onClose(e);
    };
    return (
        props.visible &&
        <Fragment>
            <div className={sc("mask")} onClick={onClickMask}/>
            <div className={sc()}>
                <div className={sc("close")} onClick={onClickClose}>
                    <Icon name="close"/>
                </div>
                <header className={sc("header")}>123</header>
                <main className={sc("main")}>
                    {props.children}
                </main>
                <footer className={sc("footer")}>
                    {
                        props.buttons && props.buttons.map((button, index) => {
                            return React.cloneElement(button, {key: index});
                        })
                    }
                </footer>
            </div>
        </Fragment>
    );
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

const confirm = (content: String, no?: () => void, yes?: () => void) => {
    const confirm = () => {
        close();
        yes && yes();
    };
    const cancel = () => {
        close();
        no && no();
    };
    const buttons = [
        <button onClick={cancel}>取消</button>,
        <button onClick={confirm}>确定</button>
    ];
    const close = model(content, buttons);
};

const alert = (content: string) => {
    const buttons = [
        <button onClick={() => {close();}}>确定</button>
    ];
    const close = model(content, buttons);
};
export {model, alert, confirm};
export default Dialog;
