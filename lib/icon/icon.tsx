import React from "react";
import "./icon.less";
import "./importAllIcon";

function Icon() {
    return (
        <div>
            <svg className='dodo-icon'>
                <use xlinkHref='#qq'/>
            </svg>
        </div>
    );
}

export default Icon;
