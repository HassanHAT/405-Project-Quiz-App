import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Results.css";

const Results = () => {
    const { state } = useLocation();
    const { questions = [], userAnswers = {} } = state;
    const navigate = useNavigate();

    const findCorrectAnswer = (question) => {
        for (const key in question.correct_answers) {
            if (question.correct_answers[key] === "true") {
                return key.replace("_correct", "");
            }
        }
    };

    const calculateScore = () => {
        return questions.reduce((score, question) => {
            const correctOption = findCorrectAnswer(question);
            if (userAnswers[question.id] === question.answers[correctOption]) {
                return score + 1;
            }
            return score;
        }, 0);
    };

    const score = calculateScore();

    return (
        <div className="results-container">
            <h1>Results</h1>

            <p> Your Score: {score} / {questions.length}</p>

            {questions.map((question) => {
                const correctOption = findCorrectAnswer(question);
                const correctAnswer = question.answers[correctOption]

                return (
                    <div key={question.id} className="results-question">
                        <h3>{question.question}</h3>
                        <p className={userAnswers[question.id] === correctAnswer ? "results-correct" : "results-incorrect"}> Your Answer: {userAnswers[question.id] || "No Answer"}</p>
                        <p className="results-correct">Correct Answer: {correctAnswer}</p>
                    </div>
                );
            })}
            <button onClick={() => navigate("/")}>Retry</button>
        </div>
    );
};

export default Results;