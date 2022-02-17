import * as React from "react";
import "./layoutExample.less";
import {Layout} from "hedongsheng-ui-react";
const {Header, Content, Footer, Aside} = Layout;

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
