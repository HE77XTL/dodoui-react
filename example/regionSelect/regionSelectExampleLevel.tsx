import * as React from "react";
import {RegionSelect} from '../../lib/index';
import {scopedClassMaker} from "../../lib/helpers/classes";

const sc = scopedClassMaker("doc");
const RegionSelectExampleLevel = () => {
    return <div>
        <div className={sc('example-row')}>
            <div className={sc('tip')}>省一级</div>
            <RegionSelect level={1}/>
        </div>
        <div>
            <div className={sc('tip')}>省、市二级</div>
            <RegionSelect level={2}/>
        </div>
    </div>;
};

export default RegionSelectExampleLevel;
