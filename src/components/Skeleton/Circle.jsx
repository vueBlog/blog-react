import React from 'react';

function Circle(props) {
  const { margin, flex, diameter, opacity = 1 } = props;
  const basicStyle = {
    flex: '0 0 auto',
    backgroundColor: '#efefef',
    borderRadius: '50%',
  };
  return (
    <div
      style={{
        ...basicStyle,
        margin,
        flex,
        width: diameter,
        height: diameter,
        opacity,
      }}
    ></div>
  );
}

export default Circle;
