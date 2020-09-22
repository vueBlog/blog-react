import React from 'react';
import ArticleListItem from '@/components/ArticleListItem/ArticleListItem';

import './ArticleList.less';

function ArticleList(props) {
  return props.listData.map((item) => (
    <ArticleListItem key={item.articleId} itemData={item}></ArticleListItem>
  ));
}

export default ArticleList;
