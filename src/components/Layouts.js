import "./layout.css";
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import SideBar from "./sideBar";
// import Card from "./cards";
import { Outlet } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";




const { Header, Sider, Content } = Layout;




const LayOut = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <Layout 
    style={{
      minHeight: '100vh',
    }}
    > 
    <Sider trigger={null} collapsible collapsed={collapsed}
      className="sider"
      >
        <SideBar />
      </Sider>
    
      <Layout className="site-layout">
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        <Content
          className="site-layout-background"
          style={{
            margin: '0',
            padding: 0,
            
            minHeight: 280,
          }}
        >
        <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayOut;