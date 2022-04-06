import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = (props) => {
  const { question } = props;
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <div className="question">
      <header>
        <h4>{question.title}</h4>
        <button className="btn" onClick={handleExpand}>
          {expand === false ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {expand === false ? "" : <p>{question.info}</p>}
    </div>
  );
};

export default Question;
