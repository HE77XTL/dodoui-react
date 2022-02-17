import * as React from "react";
import {Layout} from "hedongsheng-ui-react";
import "./layoutExample.less";

const {Header, Content, Footer} = Layout;

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
