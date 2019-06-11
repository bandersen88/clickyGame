import React, { Component } from "react";
import ImageCard from "./ImageCard";

class ClickyGame extends Component {
  state = {
      imgindex: '3',
      indexArray: [],
      clicked: [],
      score:0
  };

componentDidMount() {
    this.reset();
}

reset = () => {
    let array = ['1','2','3','4','5','6','7','8','9','10','11','12'];
    let indexArray = [...array];
    let score = 0;
    this.shuffle(indexArray);
    // console.log("First Index Array: ", array, indexArray);

    this.setState(({ indexArray, score}));
    // console.log("Index Array: ", this.state.indexArray);
}

shuffleImages = () => {
    let array = ['1','2','3','4','5','6','7','8','9','10','11','12'];
    let indexArray = [...array];
    this.shuffle(indexArray);
    // console.log("First Index Array: ", array, indexArray);

    this.setState(({ indexArray}));
    // console.log("Index Array: ", this.state.indexArray);
}

hanldeClick = (event) => {
    console.log("Event Target: ", event.target.attributes[3].value);
    if(this.state.clicked.includes(event.target.attributes[3].value)) {
        console.log("Start Game Over");
        this.reset();
    } else {
        let clicked = [...this.state.clicked];
        let score = this.state.score;

        score++;
        clicked.push(event.target.attributes[3].value);

        this.setState({ clicked, score });
        this.shuffleImages();
    }
}

shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  }


  render() {
    return (
      <div className="container">
          <div className="row">
              <h2>Score: {this.state.score}</h2>
          </div>
          <div className="d-flex align-content-start flex-wrap">
          {this.state.indexArray.map(index => (
            <ImageCard 
            key = {index}
            imgindex = {index}
            onClick={this.hanldeClick}
          />
          )
          )}
          </div>
      </div>
    );
  }
}





export default ClickyGame;


