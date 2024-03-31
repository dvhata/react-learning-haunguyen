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
    console.log("constructor");
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      lists: [],
      darkMode: false,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    const time = document.getElementById("time");
    fetchAPI().then((res) => {
      this.setState((prevState) => ({
        ...prevState,
        lists: res,
      }));
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");

    if (this.state.darkMode) {
      const value = document.querySelector("input").value;
      console.log({ value });
    }

    // fetchAPI().then((res) => {
    //   this.setState((prevState) => ({
    //     ...prevState,
    //     lists: res,
    //   }));
    // });
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
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

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode,
    }));
  };

  render() {
    console.log("rendering...");
    return (
      <>
        <h2>Hello {this.props.name}</h2>
        <h3 id="time">It is {this.state.time}.</h3>
        <button onClick={this.getTime}>Get Time</button>
        <h4>Hello {this.state.lists}</h4>
        <button onClick={this.toggleDarkMode}>Toogle</button>
        {this.state.darkMode && (
          <input value={this.state.darkMode} type="text" />
        )}
      </>
    );
  }
}
