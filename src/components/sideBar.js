import "./layout.css";
// import ant css
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import {
  AimOutlined,
  AppstoreAddOutlined,
  BellOutlined,
  CreditCardOutlined,
  HeartOutlined,
  IdcardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionCircleFilled,
  QuestionCircleOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
// import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;

export default function SideBar() {
  const navigate = useNavigate();
  const logoutButton = () => {
    console.log("clicked");
    localStorage.removeItem("user");
    navigate("/Signing");
  };

  const navigateHandler = (e) => {
    const key = e.key;
    console.log(key);
    switch (key) {
      case "logout":
        logoutButton();
        break;
      case "new-model":
        navigate("/ApproveFile");
        break;
      case "external-integrations":
        navigate("/extract");
        break;
      case "whats-new":
        navigate("/ManageField");
    }
  };

  const itemArr = [
    {
      key: "my-models",
      icon: <AimOutlined />,
      text: "My Models",
      label: "My Models",
      link: "/mymodels",
      onclick: () => {
        navigate("/CreateAccount");
      },
    },
    {
      key: "new-model",
      icon: <MenuFoldOutlined />,
      text: "New Model",
      label: "New Model",
      link: "/newmodel",
      onclick: () => {
        navigate("/ApproveFile");
      },
    },
    {
      key: "external-integrations",
      icon: <IdcardOutlined />,
      label: "External Integrations",
      text: "External Integrations",
      link: "/externalintegrations",
      onclick: () => {
        navigate("/externalintegrations");
      },
    },
    {
      key: "whats-new",
      icon: <BellOutlined />,
      text: "What's New",
      label: "What's New",
      link: "/whatsnew",
      onclick: () => {
        navigate("/whatsnew");
      },
    },
    {
      key: "documentation",
      icon: <CreditCardOutlined />,
      label: "Documentation",
      text: "Documentation",
      link: "/documentation",
      onclick: () => {
        navigate("/documentation");
      },
    },
    {
      key: "support-requests",
      icon: <HeartOutlined />,
      label: "Support Requests",
      text: "Support Requests",
      link: "/supportrequests",
      onclick: () => {
        navigate("/supportrequests");
      },
    },
    {
      key: "help",
      icon: <QuestionCircleOutlined />,
      label: "Help",
      text: "Help",
      link: "/help",
      onclick: () => {
        navigate("/help");
      },
    },
    {
      key: "my-account",
      icon: <UserOutlined />,
      label: "My Account",
      text: "My Account",
      link: "/myaccount",
      onclick: () => {
        navigate("/myaccount");
      },
      children: [
        {
          key: "logout",
          icon: <UserOutlined />,
          text: "Logout",
          label: "Logout",
          link: "/logout",
          onclick: () => {
            logoutButton();
          },
        },
      ],
    },
  ];

  return (
    <>
      <div className="menu-item">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
          theme="dark"
          className="menu"
          items={itemArr}
          onClick={navigateHandler}
        />
      </div>
    </>
  );

  // {
  //   key: "1",
  //   icon: <AimOutlined />,
  //   label: (
  //     <>
  //       <span style={{ marginBottom: "500px" }}>User 1</span>
  //     </>
  //   ),
  //   style: {
  //     backgroundColor: "#001529",
  //     color: "white",
  //     marginBottom: "500px",
  //   },
  //   url: "/user",
  //   children: [
  //     {
  //       key: "1-1",
  //       icon: <AppstoreAddOutlined />,
  //       label: "user",
  //       url: "/user",
  //     },
  //     {
  //       key: "1-2",
  //       icon: <BellOutlined />,
  //       label: "user",
  //       url: "/user",
  //     },
  //   ],
  // },
  // {
  //   key: "2",
  //   icon: <CreditCardOutlined />,
  // },
  // ];

  // return (
  // <>
  {
    /* <div>
        <div className="menu-item">
          <h3 style={{ color: "white", margin: "0" }}>Menu</h3>
          <Menu
            theme="dark"
            mode="inline"
            title="Navigation"
            style={{ color: "white" }}
            className="menu"
            items={[
              {
                key: "1",
                icon: <AimOutlined />,
                label: "My Model",
                onClick: () => navigate("/"),
              },
              {
                key: "2",
                icon: <AppstoreAddOutlined />,
                label: "New Model",
                onClick: () => {
                  navigate("/extract");
                },
              },
              {
                key: "3",
                icon: <CreditCardOutlined />,
                label: "External Integration",
                onClick: () => navigate("/DropFileInput"),
              },
            ]}
          />
        </div>
        <div className="menu-item">
          <h3 style={{ color: "white", margin: "0" }}>Other</h3>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[]}
            title="Navigation"
            style={{ color: "white" }}
            className="menu"
            items={itemArr} */
  }
  {
    /* // items={[ */
  }
  {
    /* //   {
            //     key: '4',
            //     icon: <BellOutlined />,
            //     label: 'What\'s new',
            //     onClick: () => navigate("/Invoice"),

            //   },
            //   {
            //     key: '5',
            //     icon: <IdcardOutlined />,
            //     label: 'Documentation',
            //     onClick: () => navigate("/ApproveFile"),
            //   },
            //   {
            //     key: '6',
            //     icon: <HeartOutlined />,
            //     label: 'Support Requests',
            //     onClick: () => navigate("/"),
            //   },
            //   // help
            //   {
            //     key: '7',
            //     icon: <QuestionCircleOutlined />,
            //     label: 'Help',
            //     onClick: () => navigate("/"),
            //   },
            //   // account with sub menus
            //   {
            //     key: '8',
            //     icon: <UserOutlined />,
            //     label: 'Account',
            //     onClick: () => navigate("/CreateAccount"),
            //     children: [
            //       {
            //         key: '8-1',
            //         label: 'Profile',
            //         onClick: () => navigate("/"),
            //       },
            //       {
            //         key: '8-2',
            // label: 'Settings',
            //       onClick: () => navigate("/"),
            //     },
            //     {
            //       key: '8-3',
            //       label: 'Logout',
            //       onClick: () => navigate("/"),
            //     }
            //   ]
            // },

            // ]}
          />
        </div>
      </div>
    </>
  ); */
  }
}
