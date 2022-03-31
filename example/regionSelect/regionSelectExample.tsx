import * as React from "react";
import {RegionSelect, RegionInterface} from '../../lib/index';
import {useState} from "react";


const RegionSelectExample = () => {
    const initValue = {
        // areaId: "130203",
        // cityId: "130200",
        // provinceId: "130000",

        areaId: "130203",
        cityId: "130200",
        provinceId: "130000",
    };

    const [value, setValue] = useState<RegionInterface>(initValue);

    return <div>
        <div>水平</div>
        <RegionSelect onChange={(value) => {
            console.log('value');
            console.log(value);
        }
        }/>
        <div>竖直</div>
        <RegionSelect value={value} onChange={(data) => {
            console.log(data);
            setValue(data);
        }
        } layout='vertical'/>
        <RegionSelect level={2}/>
        <RegionSelect level={1}/>
    </div>;
};

export default RegionSelectExample;
