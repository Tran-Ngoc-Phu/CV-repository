import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <section>
        <div className="container">
          <h3>Questions And Answers About Login</h3>
          <div>
            {questions.map((question) => (
              <SingleQuestion key={question.id} question={question} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
