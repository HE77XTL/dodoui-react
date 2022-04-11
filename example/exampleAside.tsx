import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

const ExampleAside = () => {
    const [scrollTop, setScrollTop] = useState(58);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleScroll() {
        const scrollTop = document.documentElement.scrollTop;
        const asideTopOffset = scrollTop > 58 ? 0 : 58 - scrollTop;
        setScrollTop(asideTopOffset);
    }

    function asideStyle() {
        return {
            top: scrollTop + 'px'
        };
    }


    return (<aside className='dodo-aside' style={asideStyle()}>
        <dl className='navList'>
            <dt className='menuItem'>
                Basic
            </dt>
            <dd>
                <NavLink to="/icon" className='menuItem' activeClassName='active'>Icon 图标</NavLink>
            </dd>
            <dd>
                <NavLink to="/button" className='menuItem' activeClassName='active'>Button 按钮</NavLink>
            </dd>
            <dd>
                <NavLink to="/dialog" className='menuItem' activeClassName='active'>Dialog 对话框</NavLink>
            </dd>
            <dd>
                <NavLink to="/layout" className='menuItem' activeClassName='active'>Layout 布局</NavLink>
            </dd>
            <dd>
                <NavLink to="/input" className='menuItem' activeClassName='active'>Input 输入框</NavLink>
            </dd>
            <dd>
                <NavLink to="/radio" className='menuItem' activeClassName='active'>Radio 单选框</NavLink>
            </dd>
            <dd>
                <NavLink to="/checkbox" className='menuItem' activeClassName='active'>Checkbox 多选框</NavLink>
            </dd>
            <dd>
                <NavLink to="/select" className='menuItem' activeClassName='active'>Select 选择器</NavLink>
            </dd>
            <dd>
                <NavLink to="/textarea" className='menuItem' activeClassName='active'>Textarea 输入框</NavLink>
            </dd>
            <dd>
                <NavLink to="/form" className='menuItem' activeClassName='active'>Form 表单</NavLink>
            </dd>
            <dt className='menuItem'>
                常用组件
            </dt>
            <dd>
                <NavLink to="/scaleImage" className='menuItem' activeClassName='active'>Image等比变宽图片</NavLink>
            </dd>
            <dd>
                <NavLink to="/regionSelect" className='menuItem' activeClassName='active'>RegionSelect 省市区选择</NavLink>
            </dd>

        </dl>
    </aside>);
};

export default ExampleAside;
