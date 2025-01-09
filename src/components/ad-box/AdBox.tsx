import React from "react";

//make a react class component

export default class AdBox extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "300px",
          width: "150px",
          backgroundColor: "blue",
          justifySelf: "flex-start",
          alignSelf: "center",
        }}
      >
        <h1 style={{ color: "white" }}>This is an ad</h1>
      </div>
    );
  }
}
