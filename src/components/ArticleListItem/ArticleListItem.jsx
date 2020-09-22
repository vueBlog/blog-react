import React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import { Divider } from 'antd';

import './ArticleListItem.less';

function GetArticleType(props) {
  let result;
  switch (props.articleNature) {
    case 0:
      result = '原创';
      break;
    case 1:
      result = '转载';
      break;
    case 2:
      result = '翻译';
      break;
    default:
      result = '原创';
      break;
  }
  return <Tag color="processing">{result}</Tag>;
}

function ArticleListItem(props) {
  const item = props.itemData;
  const articleLink = `/detail/${item.articleId}`;
  return (
    <div className="item-box">
      <Link className="item-box__header" to={articleLink}>
        <GetArticleType articleType={item.articleType}></GetArticleType>
        <h2>{item.articleTitle}</h2>
      </Link>
      <Link className="item-box__content" to={articleLink}>
        {item.articleSubTitle}...
      </Link>
      <div className="item-box__footer">
        <div className="footer-item">{item.articleCreateTime}</div>
        <Divider type="vertical" />
        <div className="footer-item">
          views <span>{item.articleView}</span>
        </div>
        <Divider type="vertical" />
        <div className="footer-item">
          stars <span>{item.articleStart}</span>
        </div>
      </div>
    </div>
  );
}

export default ArticleListItem;
