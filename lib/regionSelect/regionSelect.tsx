import React, {HTMLAttributes, useEffect, useState} from "react";
import {Select} from '../../lib/index';
import {SelectValueType} from "../helpers/formUtils";
import provinceInitData from './province';// 生产中通常数据由接口返回， 根据项目实际进行改造就好
import cityInitData from './city';
import areaInitData from './area';
import classes, {scopedClassMaker} from "../helpers/classes";
import './regionSelect.less';

export interface RegionInterface {
    provinceId?: string | number,
    cityId?: string | number,
    areaId?: string | number,
}

interface Props extends Pick<HTMLAttributes<HTMLElement>, 'className'> {
    value?: RegionInterface,
    defaultValue?: RegionInterface,
    onChange?: (data: RegionInterface) => void,
    layout?: 'vertical' | 'horizontal';
    level?: number
}


const RegionSelect: React.FunctionComponent<Props> = (props) => {
    const {value, defaultValue, onChange, level = 3, ...rest} = props;
    const SelectWidth = '150px';
    const {className} = props;
    const sc = scopedClassMaker("dodo");
    const provinceOptions = provinceInitData.map(k => {
        return {
            value: k.code,
            label: k.name,
        };
    });
    const initValue = getInitValue(props);

    const [provinceId, setProvinceId] = useState<SelectValueType>(initValue.provinceId);
    const [cityId, setCityId] = useState<SelectValueType>(initValue.cityId);
    const [areaId, setAreaId] = useState<SelectValueType>(initValue.areaId);
    const [cityOptions, setCityOptions] = useState(getSelectOptions('city', initValue.provinceId || ''));
    const [areaOptions, setAreaOptions] = useState(getSelectOptions('area', initValue.cityId || ''));


    useEffect(() => {
        if (!props.value) {
            return;
        }
        if (props.value.provinceId) {
            setProvinceId(props.value.provinceId);
            setCityOptions(getSelectOptions('city', props.value.provinceId));
            setAreaOptions([]);
            setCityId('');
            setAreaId('');
        }
        if (props.value.cityId) {
            setCityId(props.value.cityId);
            setAreaOptions(getSelectOptions('area', props.value.cityId));
            setAreaId('');
        }
        if (props.value.areaId) {
            setAreaId(props.value.areaId);
        }
    }, [props.value]);

    function getInitValue(props: Props) {
        if (props.value === undefined || props.value === null) {
            return props.defaultValue || {};
        } else {
            return props.value;
        }
    }


    const vChange = (data: RegionInterface) => {
        onChange && onChange(data);
    };

    const onProvinceChange = (provinceValue: SelectValueType) => {
        if (!props.value) {
            setProvinceId(provinceValue);
            setCityOptions(getSelectOptions('city', provinceValue || ''));
            setAreaOptions([]);
            setCityId('');
            setAreaId('');
        }
        vChange({
            provinceId: provinceValue,
            cityId: '',
            areaId: ''
        });
    };
    const onCityChange = (cityValue: SelectValueType) => {
        if (!props.value) {
            setCityId(cityValue);
            setAreaOptions(getSelectOptions('area', cityValue || ''));
            setAreaId('');
        }
        vChange({
            provinceId,
            cityId: cityValue,
            areaId: ''
        });
    };
    const onAreaChange = (areaValue: SelectValueType) => {
        if (!props.value) {
            setAreaId(areaValue);
        }
        vChange({
            provinceId,
            cityId,
            areaId: areaValue
        });
    };

    function getSelectOptions(type: string, key: string | number) {
        const initData = {
            city: cityInitData,
            area: areaInitData
        };
        // @ts-ignore
        const optionsData = initData[type][key] || [];
        // @ts-ignore
        return optionsData.map(k => {
            return {
                value: k.code,
                label: k.name,
            };
        });
    }

    return <div {...rest}
                className={classes(className, sc('regionSelect'), props.layout === 'vertical' ? sc('vertical') : '')}>
        <Select
            value={provinceId}
            options={provinceOptions}
            onChange={onProvinceChange}
            width={SelectWidth}
            filterable={true}
            className={sc('regionSelectItem')}/>
        {level >= 2 && <Select
            value={cityId}
            options={cityOptions}
            filterable={true}
            onChange={onCityChange}
            width={SelectWidth}
            className={sc('regionSelectItem')}/>}
        {level >= 3 && < Select
            value={areaId}
            filterable={true}
            options={areaOptions}
            onChange={onAreaChange}
            width={SelectWidth}
            className={sc('regionSelectItem')}/>}
    </div>;
};

RegionSelect.defaultProps = {
    layout: 'horizontal',
    level: 3
};

export default RegionSelect;
