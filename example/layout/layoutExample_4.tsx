import * as React from "react";
import Layout from "../../lib/layout/layout";
import Header from "../../lib/layout/header";
import Content from "../../lib/layout/content";
import Footer from "../../lib/layout/footer";
import "./layoutExample.less";
import Aside from "../../lib/layout/aside";

const LayoutExample_4 = () => {
    return (
        <div>
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
    );
};
export default LayoutExample_4;
