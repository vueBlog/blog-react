import React from 'react';
import Rect from './Rect';
import './ListItemSkeleton.less';

function ListItemSkeleton(props) {
  return (
    <div className="item-box skeleton-box">
      <div className="skeleton-bac-animation"></div>
      <Rect height="30px"></Rect>
      <div className="item-box__content">
        <Rect height="18px" margin="8px 0"></Rect>
        <Rect height="18px" margin="8px 0"></Rect>
        <Rect height="18px" margin="8px 0" width="50%"></Rect>
      </div>
      <div className="item-box__footer clearfix">
        <Rect width="130px"></Rect>
        <Rect width="40px" margin="0 0 0 15px"></Rect>
        <Rect width="40px" margin="0 0 0 15px"></Rect>
      </div>
    </div>
  );
}

export default ListItemSkeleton;
