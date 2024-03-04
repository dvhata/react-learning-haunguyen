import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  getTime = () => {
    const newState = {
      time: new Date().toLocaleTimeString(),
    };
    this.setState(newState);
  };

  render() {
    return (
      <>
        <h2>Hello</h2>
        <h3>It is {this.state.time}.</h3>
        <button onClick={this.getTime}>Get Time</button>
      </>
    );
  }
}
