import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";
import Homer from "./homer-simpson.svg";
import fb from "./fb.png";

class ExampleApp extends React.Component {
  render() {
    return (
      <>
        <img src={Homer} />
        <img src={fb} />
        <div className="title">This is an ExampleApp</div>
      </>
    );
  }
}

ReactDOM.render(<ExampleApp />, document.getElementById("root"));
