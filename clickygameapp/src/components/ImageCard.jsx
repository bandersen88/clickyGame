import React, { Component } from "react";

const ImageCard = props => {
  const cardStyle = {
    width: "18rem",
    backgroundColor: "grey"
  };

  const { imgindex } = props;
  const imgSrc = "./images/dog" + imgindex + ".jpg";

  return (
    <div className="card p-1 m-3" style={cardStyle} >
      <img src={imgSrc} className="card-img-top" alt="dog2" {...props}/>
    </div>
  );
};

export default ImageCard;
