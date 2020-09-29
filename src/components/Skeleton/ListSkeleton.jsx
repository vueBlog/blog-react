import React from 'react';
import ListItemSkeleton from './ListItemSkeleton';

function ListSkeleton(props) {
  return [...Array(10)].map((item, index) => (
    <ListItemSkeleton key={index}></ListItemSkeleton>
  ));
}

export default ListSkeleton;
