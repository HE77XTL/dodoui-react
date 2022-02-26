import * as React from "react";
import {useState} from "react";
import {ScaleImage} from '../../lib/'
import scaleImageB from '../common/scaleImageB.webp'
import scaleImageC from '../common/scaleImageC.webp'
import scaleImageD from '../common/scaleImageD.jpg'
import './scaleImageExample.less'
import {Button} from "hedongsheng-ui-react";


const ScaleImageExample = () => {
    const [wrapWidth, setwWrapWidth] = useState(500);

    function wrapStyle() {
        return {
            width: wrapWidth + "px"
        }
    }

    function onWidthChange(nextWidth: number) {
        if (nextWidth < 200) {
            return
        }
        if (nextWidth > 1000) {
            return;
        }
        setwWrapWidth(nextWidth)
    }

    return (
        <div className={"scaleImageExample"}>
            <div className={"changeOperate"}>
                <Button
                    className={"changeBtn"}
                    onClick={() => {
                        onWidthChange(wrapWidth + 50)
                    }}>
                    增加宽度
                </Button>
                <Button
                    className={"changeBtn"}
                    onClick={() => {
                        onWidthChange(wrapWidth - 50)
                    }}>
                    减小宽度
                </Button>
            </div>
            <div style={wrapStyle()} className={"imgWrap"}>
                <div className={"imgItem"}>
                    <ScaleImage imgUrl={scaleImageB} scale={0.36} className={"imgItem"}/>
                    <div className={"describe"}>scale: 0.36</div>
                </div>
                <div className={"imgItem"}>
                    <ScaleImage imgUrl={scaleImageD} scale={0.5} className={"imgItem"}/>
                    <div className={"describe"}>scale: 0.5</div>
                </div>
                <div className={"imgItem"}>
                    <ScaleImage imgUrl={scaleImageC} scale={1} className={"imgItem"}/>
                    <div className={"describe"}>scale: 1</div>
                </div>

            </div>
        </div>
    )
};

export default ScaleImageExample
