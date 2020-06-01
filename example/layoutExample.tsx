import * as React from "react";
import Layout from "../lib/layout/layout";
import Header from "../lib/layout/header";
import Content from "../lib/layout/content";
import Footer from "../lib/layout/footer";

const LayoutExample = () => {
    return (
        <div>
            layout
            <div>
                <div>布局1</div>
                <div>
                    <Layout className='hshshsh'>
                        <Header>header</Header>
                        <Content>content</Content>
                        <Footer>footer</Footer>
                    </Layout>
                </div>
            </div>
        </div>
    );
};
export default LayoutExample;
