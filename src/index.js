import React, {
  Component
} from "react";
import "./assets/style.css";
import ReactDOM from "react-dom";
import quizeService from "./quizService";
import QuestionBox from "./components/questionBox";
import Result from "./components/Result";

class QuizeBee extends Component {
  state = {
    questionBank: []
  };
  getQuestions = () => {
    quizeService().then(question => {
      this.setState({
        questionBank: question,
        score : 0,
        responses: 0
      });
    });
  };
  computeAnswer = (answer, correctAnswer) => {
    if(answer === correctAnswer) {
      this.setState({
        score:this.state.score + 1
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5
    });
  }
  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0
    });
  };
  componentDidMount() {
    this.getQuestions();
  }
  render() {
    return (
      <div className = "container" >
        <div className = "title" > QuizeBee </div>
          {this.state.questionBank.length > 0 && this.state.responses < 5 && this.state.questionBank.map(({question, answers, correct, questionId}) => (
            <QuestionBox question={question} options={answers} key={questionId} selected={answer => this.computeAnswer(answer, correct)}/>
          ))}
          {this.state.responses === 5 ? (<Result score={this.state.score} playAgain={this.playAgain} />) : null};
      </div>
    );
  };
}

ReactDOM.render( < QuizeBee / > , document.getElementById("root"));