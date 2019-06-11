import React, { Component } from "react";

const ImageCard = props => {

    const cardStyle = {
        width: "18rem",
        'background-color': 'grey'
    }

    const { imgIndex } = props
    const imgSrc = "./images/dog" + imgIndex + ".jpg"

  return (
    <div className="card p-1 m-3" style={cardStyle}>
      <img src={imgSrc} className="card-img-top" alt="dog2" />
 
    </div>
  );
};

export default ImageCard;
