import React, {
  Component
} from "react";
import "./assets/style.css";
import ReactDOM from "react-dom";

class QuizeBee extends Component {
  render() {
    return (
      <div className = "container" >
        <div className = "title" > QuizeBee </div>
      </div>
    );
  }
}

ReactDOM.render( < QuizeBee / > , document.getElementById("root"));