import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import QuoteBox from "./components/QuoteBox.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "green"
    };
  }
  randomColor() {
    const color = `hsl(${Math.floor(Math.random() * 360)},
    ${Math.floor(Math.random() * 25 + 75)}%,
    ${Math.floor(Math.random() * 25 + 25)}%)`;

    this.setState({ color });
  }

  render() {
    const color = this.state.color;
    return (
      <div
        className="background"
        style={{ backgroundColor: color, color: color }}
      >
        <QuoteBox
          dropColor={() => this.randomColor()}
          color={this.state.color}
        />
        <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js">
          Not found
        </script>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
