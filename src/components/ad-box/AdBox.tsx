import React from "react";
import "./AdBox.css";

export default class AdBox extends React.Component {
  render() {
    return (
      <div className="ad-box">
        <img
          src="https://digitalsynopsis.com/wp-content/uploads/2023/12/creative-ads-coke-long-can.jpg"
          alt="ad"
          className="ad"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxEH4R6LeHS7WKhYsspRTyEXWChHNJC1RLcQ&s"
          alt="ad"
          className="ad"
        />
      </div>
    );
  }
}
