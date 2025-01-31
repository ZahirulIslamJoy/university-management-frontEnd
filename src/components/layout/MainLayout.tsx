import { Layout } from "antd";
import {Outlet } from "react-router-dom";
import SideLayout from "./SideLayout";
const { Header, Content } = Layout;


const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
    <SideLayout></SideLayout>
      <Layout>
        <Header />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
