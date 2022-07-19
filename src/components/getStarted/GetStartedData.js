import React from "react";

export default function GetStartedData(props) {
  return (
    <div>
      <div className="cases-div">{props.item_name}</div>
      <div className="div18">{props.item_description}</div>
    </div>
  );
}
