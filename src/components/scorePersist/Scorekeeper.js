import React, { useEffect, useState } from "react";

export const Scorekeeper = () => {
  const [score, setScore] = useState(
    parseInt(localStorage.getItem("score")) || 0
  );
  const handleClick = (e, type) => {
    if (type === "increase") setScore((prev) => prev + 1);
    if (type === "decrease") setScore((prev) => prev - 1);
  };
  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  return (
    <>
      Scorekeeper
      <button onClick={(e) => handleClick(e, "increase")}>increase</button>
      <button onClick={(e) => handleClick(e, "decrease")}>decrease</button>
      <span className="score">{score}</span>
    </>
  );
};
