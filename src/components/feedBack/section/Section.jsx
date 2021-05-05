import React from "react";

const Section = ({ title, children }) => {
  console.log({ children });
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
