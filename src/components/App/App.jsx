import React, { Component } from 'react';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = evt => {
    this.setState({ good: this.state.good + 1 });
  };

  handleIncrementNeutral = evt => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  handleIncrementBad = evt => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.handleIncrementGood}>
          Good
        </button>
        <button type="button" onClick={this.handleIncrementNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleIncrementBad}>
          Bad
        </button>
        <h2>Statistics </h2>
        <p>Good state: {good} </p>
        <p>Neutral state: {neutral}</p>
        <p>Bad state: {bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Total: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}
