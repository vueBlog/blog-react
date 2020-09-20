import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import logo from '@/assets/img/logo.jpg';
import routes from '@/router/index';
// const { SubMenu } = Menu;

import './BasicHeader.less';

function HeaderLogo(props) {
  return (
    <Link to="/" className="header-logo">
      <img src={logo} alt="logo" className="header-logo_logo" />
      <div className="header-logo_text">{process.env.REACT_APP_title}</div>
    </Link>
  );
}

class BasicHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const menuItems = routes.map((item) => (
      <Menu.Item key={item.path}>
        <Link to={item.path}>{item.name}</Link>
      </Menu.Item>
    ));
    return (
      <div className="header-box">
        <HeaderLogo></HeaderLogo>
        <Menu
          mode="horizontal"
          theme="light"
          selectedKeys={[this.props.match.url]}
          className="header-nav"
        >
          {menuItems}
        </Menu>
      </div>
    );
  }
}

export default BasicHeader;
