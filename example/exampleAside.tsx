import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";

const ExampleAside = () => {
    const [scrollTop, setScrollTop] = useState(58);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    function handleScroll() {
        const scrollTop = document.documentElement.scrollTop;
        const asideTopOffset = scrollTop > 58 ? 0 : 58 - scrollTop;
        setScrollTop(asideTopOffset);
    }

    function asideStyle() {
        return {
            top: scrollTop + 'px'
        }
    }


    return (<aside className='dodo-aside' style={asideStyle()}>
        <dl className='navList'>
            <dt className='menuItem'>
                Basic
            </dt>
            <dd>
                <NavLink to="/icon" className='menuItem' activeClassName='active'>icon 图标</NavLink>
            </dd>
            <dd>
                <NavLink to="/dialog" className='menuItem' activeClassName='active'>dialog 对话框</NavLink>
            </dd>
            <dd>
                <NavLink to="/layout" className='menuItem' activeClassName='active'>layout 布局</NavLink>
            </dd>
            <dd>
                <NavLink to="/button" className='menuItem' activeClassName='active'>button 按钮</NavLink>
            </dd>
            <dd>
                <NavLink to="/input" className='menuItem' activeClassName='active'>input 输入框</NavLink>
            </dd>
            <dd>
                <NavLink to="/form" className='menuItem' activeClassName='active'>form 表单</NavLink>
            </dd>
        </dl>
    </aside>)
}

export default ExampleAside
