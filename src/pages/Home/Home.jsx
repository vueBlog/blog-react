import React from 'react';
import axios from '@/plugins/axios';
import { Layout } from 'antd';

import ListSkeleton from '@/components/Skeleton/ListSkeleton';
import ArticleList from '@/components/ArticleList/ArticleList';
import ArticleScreen from '@/components/ArticleScreen/ArticleScreen';
import { encodeQuery, decodeQuery } from '@/utils/LocationSearch';
import './Home.less';

const { Sider, Content } = Layout;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      articleList: [],
      justOriginal: false,
      order: '0',
      total: 0,
      limit: process.env.REACT_APP_listLimit
        ? process.env.REACT_APP_listLimit * 1
        : 10,
      page: 1,
      dateTime: '',
      columnId: '',
      author: '',
    };
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      ...decodeQuery(this.props.location.search),
    });
    this.getListData();
  }

  getListData() {
    let query = {
      limit: this.state.limit,
      page: this.state.page,
      justOriginal: this.state.justOriginal,
      order: this.state.order,
      dateTime: this.state.dateTime,
      columnId: this.state.columnId,
    };
    this.setState({
      loading: true,
    });
    axios
      .get('/articleList', {
        params: {
          ...query,
        },
      })
      .then((r) => {
        console.log(r);
        this.setState({
          total: r.data.total,
          articleList: r.data.list,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((_) => {
        this.setState({
          loading: false,
        });
      });
  }

  onCheckboxChange(event) {
    this.setState({
      justOriginal: event.target.checked,
    });
  }

  onSelectChange(value) {
    this.setState({
      order: value,
    });
    const searchObj = decodeQuery(this.props.location.search);
    console.log(searchObj);
    this.props.history.push({
      ...this.props.location,
      search: encodeQuery({
        ...searchObj,
        order: value,
      }),
    });
  }

  render() {
    const { loading, articleList, justOriginal, order } = this.state;
    const { onCheckboxChange, onSelectChange } = this;
    let list;
    console.log(loading);
    if (loading) {
      list = <ListSkeleton></ListSkeleton>;
    } else {
      list = <ArticleList listData={articleList}></ArticleList>;
    }
    return (
      <Layout className="page-content__body">
        <Sider theme="light" className="page-sider">
          <div>Sider</div>
        </Sider>
        <Content className="page-body">
          <ArticleScreen
            checked={justOriginal}
            order={order}
            onCheckboxChange={onCheckboxChange}
            onSelectChange={onSelectChange}
          ></ArticleScreen>
          {list}
        </Content>
      </Layout>
    );
  }
}

export default Home;
