import React from 'react';
import ListItemSkeleton from './ListItemSkeleton';

function ListSkeleton(props) {
  return [...Array(props.limit)].map((item, index) => (
    <ListItemSkeleton key={index}></ListItemSkeleton>
  ));
}

export default ListSkeleton;
