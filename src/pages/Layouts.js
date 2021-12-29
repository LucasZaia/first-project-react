import { Layout, Menu, Breadcrumb } from "antd";
import React from "react";
import { useState } from "react";

import { Outlet } from "react-router-dom";

import {Route, Routes, Link } from "react-router-dom";


import Home from "../pages/Home";
import Empresa from "../pages/Empresa";
import Contato from "../pages/Contato";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
  ShopOutlined,
  CommentOutlined
} from "@ant-design/icons";


const { Header, Sider, Content, Footer } = Layout;

function Layouts() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggle, setToggle] = useState();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ShopOutlined />}>
            <Link to="/empresa">Empresa</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<CommentOutlined />}>
            <Link to="/contato">Contato</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            setCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: setToggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/empresa" element={<Empresa />}></Route>
            <Route path="/contato" element={<Contato />}></Route>
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Lucas Dev ©2021 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
        
}


export default Layouts;
