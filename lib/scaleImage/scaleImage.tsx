import * as React from "react";
import {ImgHTMLAttributes} from "react";
import './scaleImage.less'
import classes, {scopedClassMaker} from "../helpers/classes";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    imgUrl: string,
    scale: number
}

const sc = scopedClassMaker("dodo-scale-image");

const ScaleImage: React.FunctionComponent<Props> = (props) => {
    const {imgUrl, scale, className} = props;
    const imgWrapStyle = {
        paddingLeft: '100%',
        paddingTop: `${100 * scale}%`,
    };

    return <div className={classes(sc("wrap"), className) }>
        <div style={imgWrapStyle}/>
        <div className={sc("panel")}>
            <img src={imgUrl} alt={props.alt}/>
        </div>
    </div>
};

export default ScaleImage
