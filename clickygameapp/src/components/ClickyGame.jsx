import React, { Component } from "react";
import ImageCard from "./ImageCard";

class ClickyGame extends Component {
  state = {
      imgIndex: '3'
  };
  render() {
    return (
      <div className="container">
          <ImageCard 
            imgIndex = {this.state.imgIndex}
          />
      </div>
    );
  }
}

export default ClickyGame;
