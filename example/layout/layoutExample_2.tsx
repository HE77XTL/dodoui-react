import * as React from "react";
import Layout from "../../lib/layout/layout";
import Header from "../../lib/layout/header";
import Content from "../../lib/layout/content";
import Footer from "../../lib/layout/footer";
import "./layoutExample.less";
import Aside from "../../lib/layout/aside";

const LayoutExample_2 = () => {
    return (
        <div>
            <div>顶部-侧边布局-左</div>
            <div>
                <Layout>
                    <Header>header</Header>
                    <Layout>
                        <Aside>side</Aside>
                        <Content>content</Content>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
            </div>
        </div>
    );
};
export default LayoutExample_2;
