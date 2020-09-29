import React from 'react';

function Rect(props) {
  const { margin, flex, width = '100%', height = '26px', opacity = 1 } = props;
  const basicStyle = {
    flex: '0 0 auto',
    backgroundColor: '#efefef',
    borderRadius: '2px',
  };
  return (
    <div style={{ ...basicStyle, margin, flex, width, height, opacity }}></div>
  );
}

export default Rect;
