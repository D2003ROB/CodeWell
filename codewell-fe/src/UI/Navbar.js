import React from 'react';

import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;
const rightStyle = {position: 'absolute', top: 0, right: 0}

function Navbar(props) {
  return(
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3" id="logged-in-user" style={rightStyle}>
          {props.userData.id}
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;
