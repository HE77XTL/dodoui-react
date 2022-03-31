import * as React from "react";
import {RegionSelect} from '../../lib/index';
import {scopedClassMaker} from "../../lib/helpers/classes";

const sc = scopedClassMaker("doc");
const RegionSelectExample = () => {
    return <div>
        <div>
            <div className={sc('tip')}>基本使用</div>
            <RegionSelect/>
        </div>
    </div>;
};

export default RegionSelectExample;
