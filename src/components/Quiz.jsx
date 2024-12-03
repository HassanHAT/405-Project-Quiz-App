import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Quiz.css";

const Quiz = () => {
  const { state } = useLocation();
  const { difficulty, category, limit } = state;
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
        const response = await fetch(
          `https://quizapi.io/api/v1/questions?apiKey=D6l7KeNo9XeyqigwwTymuhRGcZt9jscJo0xsMWqV&difficulty=${difficulty}&category=${category}&limit=${limit}`
        );
        const data = await response.json();
        setQuestions(data);
    };

    fetchQuestions();
  }, [category, difficulty, limit]);

  const handleAnswerChange = (questionId, answer) => {
    const updatedAnswers = { ...userAnswers, [questionId]: answer };
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    navigate("/results", { state: { questions, userAnswers } });
  };

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      {questions.map((question) => (
        <div key={question.id} className="quiz-question">
          <h3>{question.question}</h3>
          {[question.answers.answer_a,
            question.answers.answer_b,
            question.answers.answer_c,
            question.answers.answer_d,
          ]
            .map((value, index) => {
              return value ? (
                <label key={index}>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={value}
                    onChange={() =>
                      handleAnswerChange(question.id, value)
                    }
                  />
                  {value}
                </label>
              ) : null;
            })}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );  
};

export default Quiz;