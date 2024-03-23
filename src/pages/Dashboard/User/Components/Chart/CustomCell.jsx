import React from "react";

const CustomCell = ({ fill, index, activeIndex, ...props }) => {
  const isActive = index === activeIndex;
  const activeStyle = isActive ? { filter: "url(#shadow)" } : {};

  return <rect {...props} fill={fill} style={activeStyle} />;
};

export default CustomCell;
