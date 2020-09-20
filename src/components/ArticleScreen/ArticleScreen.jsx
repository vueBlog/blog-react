import React from 'react';
import { Checkbox, Select } from 'antd';
import './ArticleScreen.less';

const { Option } = Select;

function ArticleScreen(props) {
  return (
    <div className="article-screen-box">
      <div className="article-screen__left">
        <Checkbox checked={props.checked} onChange={props.onCheckboxChange}>
          仅看原创
        </Checkbox>
      </div>
      <div className="article-screen__right">
        <div className="">文章排序：</div>
        <Select
          defaultValue="0"
          style={{ width: 217 }}
          onChange={props.onSelectChange}
        >
          <Option value="0">默认</Option>
          <Option value="1">按访问量</Option>
          <Option value="2">按点赞数</Option>
        </Select>
      </div>
    </div>
  );
}

export default ArticleScreen;
