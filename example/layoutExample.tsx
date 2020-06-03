import * as React from "react";
import Layout from "../lib/layout/layout";
import Header from "../lib/layout/header";
import Content from "../lib/layout/content";
import Footer from "../lib/layout/footer";
import "./layoutExample.less";
import Aside from "../lib/layout/aside";

const LayoutExample = () => {
    return (
        <div>
            <div className='example'>
                <div>布局1</div>
                <div>
                    <Layout className='hshshsh'>
                        <Header className='xx'>header</Header>
                        <Content className='yy'>content</Content>
                        <Footer className='zz'>footer</Footer>
                    </Layout>
                </div>
            </div>
            <div className='example'>
                <div>布局2</div>
                <div>
                    <Layout className='hshshsh'>
                        <Header>header</Header>
                        <Layout>
                            <Aside>side</Aside>
                            <Content>content</Content>
                        </Layout>
                        <Footer>footer</Footer>
                    </Layout>
                </div>
            </div>
            <div className='example'>
                <div>布局3</div>
                <div>
                    <Layout className='hshshsh'>
                        <Header>header</Header>
                        <Layout>
                            <Content>content</Content>
                            <Aside>side</Aside>
                        </Layout>
                        <Footer>footer</Footer>
                    </Layout>
                </div>
            </div>
            <div className='example'>
                <div>布局4</div>
                <div>
                    <Layout className='hshshsh'>
                        <Aside>side</Aside>
                        <Layout>
                            <Header>header</Header>
                            <Content>content</Content>
                            <Footer>footer</Footer>
                        </Layout>
                    </Layout>
                </div>
            </div>
        </div>
    );
};
export default LayoutExample;
