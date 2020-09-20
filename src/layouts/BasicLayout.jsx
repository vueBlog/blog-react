import React from 'react';
import { Route } from 'react-router-dom';
import BasicHeader from '@/components/BasicHeader/BasicHeader';
import { Layout } from 'antd';
import routes from '@/router/index';
import './BasicLayout.less';

const { Header, Footer, Content } = Layout;
const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={(props) => <route.component {...props} routes={route.routes} />}
  />
);

class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Layout className="page">
        <Header className="page-header">
          <Route path="/:page?" component={BasicHeader} />
        </Header>
        <Content className="page-content">
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Content>
        <Footer className="page-footer">Footer</Footer>
      </Layout>
    );
  }
}

export default BasicLayout;
