import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="card" 
      style={{
        background: props.background,
        color: props.color,
        borderColor: props.borderColor,
        borderWidth: props.borderWidth,
        borderStyle: props.borderStyle,
        borderRadius: props.borderRadius,
        boxShadow: props.boxShadow,
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        margin: "10px"
      }}
      >
        <div className="card-holder"
        style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            flexDirection:"column",
        }}
        >
          <div className="card-header">
            <h4>{props.title}</h4>
          </div>
          <div className="card-body">
            <p>{props.body}</p>
          </div>
        </div>
        <div className="card-icon">
            {props.icon}
          </div>
      </div>
    </>
  );
}
