import React, { useEffect, useState } from 'react';
import './Quizpage.css';

function Quizpage() {
    const [questions] = useState([
        {
            id: 1,
            question: "Which of the following is true regarding Babel?",
            options: ["Compiler", "Transpiler", "Both of the above", "None of the above"],
            correctAnswer: "Both of the above",
            selectedOption: null,
        },
        {
            id: 2,
            question: "What is ReactJS primarily used for?",
            options: [" user interfaces", "server-side applications", "Creating mobile apps", "All of the above"],
            correctAnswer: "user interfaces",
            selectedOption: null,
        },
        {
            id: 3,
            question: "How is data passed between React components?",
            options: ["Through props", "Through state", "Through context", "All of the above"],
            correctAnswer: "Through props",
            selectedOption: null,
        },
        {
            id: 4,
            question: "In React, what does the term props stand for?",
            options: ["Properties", "Parameters", "Functions", "None of the above"],
            correctAnswer: "Properties",
            selectedOption: null,
        },
        {
            id: 5,
            question: "In which language is React.js written?",
            options: ["Python", "Java", "PHP", "Javascript"],
            correctAnswer: "Javascript",
            selectedOption: null,
        },
    ]);

    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const [currentPage, setCurrentPage] = useState('quiz');
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleAnswerSelection = (selectedAnswer) => {
        setSelectedOption(selectedAnswer);
        questions[currentQuestionIndex].selectedOption = selectedAnswer;
    };

    const handleNextQuestion = () => {
        if (selectedOption === null) {
            return;
        }

        if (currentQuestionIndex === questions.length - 1) {
            setCurrentPage('completion');
            calculateScore(); 
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null); 
        }
    };

    const calculateScore = () => {
        let tempScore = 0;
        questions.forEach((question) => {
            if (question.correctAnswer === question.selectedOption) {
                tempScore++;
            }
        });
        setScore(tempScore);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                    setRedirect(true);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000);

        setStartTime(new Date());

        return () => clearInterval(interval);
    }, [minutes,seconds]);

    useEffect(() => {
        if (redirect) {
            window.location.href = '/Completion';
        }
    }, [redirect]);

    const timeTaken = startTime ? ((new Date() - startTime) / 1000).toFixed(0) : 'N/A';

    return (
        <div className="quiz-container">
            {currentPage === 'quiz' && (
                <div className="quiz-content">
                    <p className="timer">Time Remaining: {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</p>
                    <h3 className="question">{questions[currentQuestionIndex].question}</h3>
                    <ul className="options">
                        {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                            <li key={optionIndex} onClick={() => handleAnswerSelection(option)} className={selectedOption === option ? 'selected' : ''}>
                                <span className="option-number">{String.fromCharCode(97 + optionIndex)}.</span> {option}
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleNextQuestion} disabled={selectedOption === null} className="next-button" style={{textAlign:"center"}}>Next</button>
                </div>
            )}
            {currentPage === 'completion' && (
                <div className="completion-content">
                    <h2 className="completion-header">Quiz completed!</h2>
                    <p className="score">Your score is: {score}</p>
                    <p className="time-taken">Time taken: {timeTaken} seconds</p>
                    <h3 className='ans'>Answers Selected:</h3>
                    <ul>
                        {questions.map((question, index) => (
                            <div className='container' key={index}>
                                <li className="question-answer">
                                    {question.question}: <span className={question.selectedOption ? 'selected-answer' : ''}>{question.selectedOption || 'No answer selected'}</span>
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Quizpage;

