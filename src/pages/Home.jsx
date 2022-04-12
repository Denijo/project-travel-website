import React, { useState } from "react";
import Header from "../components/Header";
export default function Home() {
  const [state] = useState({
    heading: "We are travel friends",
    paragraph:
      " Come and join us we travel the most and beautiful places in the world",
  });
  return (
    <>
      <Header heading={state.heading} paragraph={state.paragraph}>
        <button className="btn-default">Get Started</button>
      </Header>
    </>
  );
}
