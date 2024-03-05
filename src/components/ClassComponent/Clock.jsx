import React from "react";

const lists = ["A", "B", "C", "D"];
const fetchAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(lists);
    }, 1000);
  });
};
export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    const time = document.getElementById("time");
    fetchAPI().then((res) => {
      this.setState((prevState) => ({
        ...prevState,
        lists: res,
      }));
    });
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  getTime() {
    // previousState.time !== newState.time (khác nhau về mặt tham chiếu)
    const newState = {
      ...this.state,
      time: new Date().toLocaleTimeString(),
      lists: [],
    };
    this.setState(newState);
    this.getTime = this.getTime.bind(this);
  }

  render() {
    console.log(this);
    return (
      <>
        <h2>Hello {this.props.name}</h2>
        <h3 id="time">It is {this.state.time}.</h3>
        <button onClick={this.getTime}>Get Time</button>
        <h4>Hello {this.state.lists}</h4>
      </>
    );
  }
}
