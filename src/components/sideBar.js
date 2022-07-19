
import "./layout.css";
// import ant css
import { useNavigate } from "react-router-dom";
import 'antd/dist/antd.css';
import {
  AimOutlined,
  AppstoreAddOutlined,
  BellOutlined,
  CreditCardOutlined,
  HeartOutlined,
  IdcardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionCircleOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
// import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;



export default function SideBar() {
    const navigate = useNavigate();
  return (
    <>
        <div>
        <div className="menu-item">
          <h3 style={{color:"white", margin:"0"}}>Menu</h3>
          <Menu
          theme="dark"
          mode="inline"
          title="Navigation"
          style={{color:"white"}}
          className="menu"
          items={[
            {
              key: '1',
              icon: <AimOutlined />,
              label: 'My Model',
              onClick: () => navigate("/"),

            },
            {
              key: '2',
              icon: <AppstoreAddOutlined />,
              label: 'New Model',
              onClick: () => {
                navigate("/extract")
              },
            },
            {
              key: '3',
              icon: <CreditCardOutlined />,
              label: 'External Integration',
              onClick: () => navigate("/DropFileInput"),
            },
          ]}
        />
        </div>
        <div className="menu-item">
          <h3 style={{color:"white", margin:"0"}}>Other</h3>
          <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[]}
          title="Navigation"
          style={{color:"white"}}
          className="menu"
          items={[
            {
              key: '4',
              icon: <BellOutlined />,
              label: 'What\'s new',
              onClick: () => navigate("/Invoice"),

            },
            {
              key: '5',
              icon: <IdcardOutlined />,
              label: 'Documentation',
              onClick: () => navigate("/ApproveFile"),
            },
            {
              key: '6',
              icon: <HeartOutlined />,
              label: 'Support Requests',
              onClick: () => navigate("/"),
            },
            // help
            {
              key: '7',
              icon: <QuestionCircleOutlined />,
              label: 'Help',
              onClick: () => navigate("/"),
            },
            // account with sub menus
            {
              key: '8',
              icon: <UserOutlined />,
              label: 'Account',
              onClick: () => navigate("/CreateAccount"),
              subMenu: [
                {
                  key: '8-1',
                  label: 'Profile',
                  onClick: () => navigate("/"),
                },
                {
                  key: '8-2',
                  label: 'Settings',
                  onClick: () => navigate("/"),
                },
                {
                  key: '8-3',
                  label: 'Logout',
                  onClick: () => navigate("/"),
                }
              ]
            },
            
          ]}
        />
        </div>
        </div>
    </>
  )
}
