import React from "react";

const FeadBackOptions = ({ counterGood, counterNeutral, counterBad }) => {
  return (
    <>
      <button onClick={counterGood}>Good</button>
      <button onClick={counterNeutral}>Neutral</button>
      <button onClick={counterBad}>Bad</button>
    </>
  );
};

export default FeadBackOptions;
