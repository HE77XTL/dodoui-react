import * as React from "react";
import Layout from "../../lib/layout/layout";
import Header from "../../lib/layout/header";
import Content from "../../lib/layout/content";
import Footer from "../../lib/layout/footer";
import "./layoutExample.less";

const LayoutExample = () => {
    return (
        <div>
            <div>上中下布局</div>
            <Layout className='hedsdiy'>
                <Header className='xx'>header</Header>
                <Content className='yy'>content</Content>
                <Footer className='zz'>footer</Footer>
            </Layout>
        </div>
    );
};
export default LayoutExample;
