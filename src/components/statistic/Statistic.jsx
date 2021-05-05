import React from "react";

const Statistic = ({
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  good,
  bad,
  neutral,
}) => {
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {countTotalFeedback}</li>
        <li>Positive feedback: {countPositiveFeedbackPercentage} %</li>
      </ul>
    </>
  );
};

export default Statistic;
