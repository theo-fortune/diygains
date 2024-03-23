// CustomBarComponent.js
import React from "react";

const CustomBarComponent = (props) => {
  const { fill, x, y, width, height } = props;

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      className="custom-bar"
    />
  );
};

export default CustomBarComponent;
