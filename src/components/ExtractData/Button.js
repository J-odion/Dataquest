import React, { useState } from "react";
// import button from antd
import { Button } from "antd";

export default function ButtonJsx(props) {
  const [size, setSize] = useState("large");
  return (
    <>
      <Button
        type="primary"
        shape="round"
        icon={props.icon}
        size={size}
        // set the onclick to props 
        onClick={props.onClick}
        style={{
          background: props.background,
          color: props.color,
          borderColor: props.borderColor,
          borderWidth: props.borderWidth,
          borderStyle: props.borderStyle,
          borderRadius: props.borderRadius,
          boxShadow: props.boxShadow,
        }}
      >
        {props.name}
      </Button>
    </>
  );
}
