import React, {useState} from "react";
import {Select} from '../../lib/index';
import {SelectValueType} from "../helpers/formUtils";
import provinceInitData from './province';
import cityInitData from './city';
import areaInitData from './area';


interface RegionInterface {
    provinceId?: string,
    cityId?: string,
    areaId?: string,
}

interface Props {
    value?: RegionInterface,
    onChange?: (data: RegionInterface) => void
}


const RegionSelect: React.FunctionComponent<Props> = (props) => {
    const provinceOptions = provinceInitData.map(k => {
        return {
            value: k.code,
            label: k.name,
        };
    });
    const {value = {}, onChange, ...rest} = props;


    const [provinceId, setProvinceId] = useState<SelectValueType>(value.provinceId);
    const [cityId, setCityId] = useState<SelectValueType>(value.cityId);
    const [areaId, setAreaId] = useState<SelectValueType>(value.areaId);
    const [cityOptions, setCityOptions] = useState([]);
    const [areaOptions, setAreaOptions] = useState([]);


    const onProvinceChange = (provinceValue: SelectValueType) => {
        console.log('provinceValue');
        console.log(provinceValue);
        setProvinceId(provinceValue);
        if (provinceValue) {
            // @ts-ignore
            const cities = cityInitData[provinceValue] || [];
            // @ts-ignore
            const nextOptions = cities.map(k => {
                return {
                    value: k.code,
                    label: k.name,
                };
            });
            setCityOptions(nextOptions);
            setAreaOptions([]);
            setCityId('');
            setAreaId('');
        }
    };
    const onCityChange = (cityValue: SelectValueType) => {
        setCityId(cityValue);
        if (cityValue) {
            // @ts-ignore
            const areas = areaInitData[cityValue] || [];
            // @ts-ignore
            const nextOptions = areas.map(k => {
                return {
                    value: k.code,
                    label: k.name,
                };
            });
            setAreaOptions(nextOptions);
            setAreaId('');
        }
    };
    const onAreaChange = (areaValue: SelectValueType) => {
        setAreaId(areaValue);
    };

    return <div {...rest}>
        <Select value={provinceId} options={provinceOptions} onChange={onProvinceChange}/>
        <Select value={cityId} options={cityOptions} onChange={onCityChange}/>
        <Select value={areaId} options={areaOptions} onChange={onAreaChange}/>
    </div>;
};

export default RegionSelect;
