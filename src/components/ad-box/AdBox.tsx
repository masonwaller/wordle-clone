import React from "react";

//make a react class component

export default class AdBox extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "150px",
          justifySelf: "flex-start",
          alignSelf: "center",
        }}
      >
        <img
          src="https://digitalsynopsis.com/wp-content/uploads/2023/12/creative-ads-coke-long-can.jpg"
          alt="ad"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxEH4R6LeHS7WKhYsspRTyEXWChHNJC1RLcQ&s"
          alt="ad"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
    );
  }
}
