// Code DigitalClicker Component Here
import React, { Component } from "react";

class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    let newClick = this.state.timesClicked + 1;
    this.setState({timesClicked:newClick})
  }

  render () {
    return (
        <div>
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        </div>
    )
  }
}

export default DigitalClicker;
