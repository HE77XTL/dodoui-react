import * as React from "react";
import Layout from "../../lib/layout/layout";
import Header from "../../lib/layout/header";
import Content from "../../lib/layout/content";
import Footer from "../../lib/layout/footer";
import "./layoutExample.less";
import Aside from "../../lib/layout/aside";

const LayoutExample_3 = () => {
    return (
        <div>
            <div>顶部-侧边布局-右</div>
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
    );
};
export default LayoutExample_3;
