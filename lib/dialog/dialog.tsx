import React, {Fragment} from "react";
import {Icon} from "../index";
import "./dialog.less";
import {scopedClassMaker} from "../helpers/classes";

// 一身清贫怎敢入繁华,二袖清风怎敢误佳人，罢了罢了

interface Props {
    visible: Boolean
}

const sc = scopedClassMaker("dodo-dialog");

const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ?
            <Fragment>
                <div className={sc("mask")}/>
                <div className={sc()}>
                    <div className={sc('close')}>
                        <Icon name="close"/>
                    </div>
                    <header className={sc("header")}>123</header>
                    <main className={sc("main")}>
                        {props.children}
                    </main>
                    <footer className={sc("footer")}>
                        <button>cancel</button>
                        <button>confirm</button>
                    </footer>
                </div>
            </Fragment> :
            null
    );
};

export default Dialog;
