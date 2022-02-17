import * as React from "react";
import "./layoutExample.less";
import {Layout} from "hedongsheng-ui-react";
const {Header, Content, Footer, Aside} = Layout;

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
