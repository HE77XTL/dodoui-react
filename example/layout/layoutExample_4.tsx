import * as React from "react";
import "./layoutExample.less";
import {Layout} from "hedongsheng-ui-react";
const {Header, Content, Footer, Aside} = Layout;

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
