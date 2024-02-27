// Questions.js
import React from 'react';

function Questions({ handleAnswerSelection }) {
    const questions = [
        {
            id: 1,
            question: "What is the capital of France?",
            options: ["Paris", "London", "Rome", "Berlin"],
            correctAnswer: "Paris",
        },
        {
            id: 2,
            question: "What is the largest ocean in the world?",
            options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
            correctAnswer: "Pacific Ocean",
        },
        {
            id: 3,
            question: "What is the tallest mountain in the world?",
            options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
            correctAnswer: "Mount Everest",
        },
    ];

    const handleOptionClick = (selectedAnswer, correctAnswer) => {
        handleAnswerSelection(selectedAnswer === correctAnswer);
    };

    return (
        <div>
            {questions.map((question) => (
                <div key={question.id}>
                    <h3>{question.question}</h3>
                    <ul>
                        {question.options.map((option, index) => (
                            <li key={index} onClick={() => handleOptionClick(option, question.correctAnswer)}>
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Questions;


