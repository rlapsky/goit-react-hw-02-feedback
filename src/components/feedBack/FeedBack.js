import React, { Component } from "react";
import FeadBackOptions from "../feedBackOption/FeadBackOptions";
import Notification from "../notification/Notification";
import Statistic from "../statistic/Statistic";
import Section from "./section/Section";

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  counterGood = () => {
    this.setState((prevState) => ({ good: prevState.good + 1 }));
  };
  counterNeutral = () => {
    this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
  };
  counterBad = () => {
    this.setState((prevState) => ({ bad: prevState.bad + 1 }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeadBackOptions
            counterGood={this.counterGood}
            counterNeutral={this.counterNeutral}
            counterBad={this.counterBad}
          />
        </Section>

        {this.countTotalFeedback() < 1 ? (
          <Notification message={"No feedback given"} />
        ) : (
          <Section title={"Statistic"}>
            <Statistic
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage()
                  ? this.countPositiveFeedbackPercentage()
                  : 0
              }
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
            />
          </Section>
        )}
      </>
    );
  }
}

export default FeedBack;
