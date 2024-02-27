import React, { useEffect, useState } from 'react'
import './Quizpage.css';



function Quizpage() {

    const [questions] = useState([
        {
            id: 1,
            question: "Which of the following is true regarding Babel?",
            options: ["Compiler", "Transpiler", "Both of the above", "None of the above"],
            correctAnswer: "Paris",
            selectedOption: null,
        },
        {
            id: 2,
            question: "Which of the following command is used to create react-js-app ?",
            options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
            correctAnswer: "Pacific Ocean",
            selectedOption: null,
        },
        {
            id: 3,
            question: "What is the tallest mountain in the world?",
            options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
            correctAnswer: "Mount Everest",
            selectedOption: null,
        },
    ]);

    const [minutes,setminutes] = useState(5);
    const [seconds,setseconds] = useState(0);
    const [redirect,setredirect] = useState(0);
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
            if (seconds===0){
                if(minutes===0){
                    clearInterval(interval);
                    setredirect(true);}
                    else{
                        setminutes(minutes-1);
                        setseconds(59);
                    }

                }else{
                    setseconds(seconds-1);
                }
            
        },1000);
        return () => clearInterval(interval)
    }, [minutes,seconds]);

    useEffect(() => {
        if(redirect){
            window.location.href ='/Completion';
        }
    },[redirect]);

    const Minutes = minutes.toString().padStart(2, '0')
    const Seconds = seconds.toString().padStart(2, '0')

    


  return (
    <div className="quiz-container"> 
            {currentPage === 'quiz' && (
                <div className="quiz-content"> 
                    <p className="timer">Time Remaining: {Minutes}:{Seconds}</p>
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
                    <h3>Answers Selected:</h3>
                    <ul>
            {questions.map((question, index) => (
                <li key={index}>
                    {question.question}: <span className={question.selectedOption ? 'selected-answer' : ''}>{question.selectedOption || 'No answer selected'}</span>
                </li>
            ))}
        </ul>
                </div>
            )}
        </div>
    );
}


export default Quizpage