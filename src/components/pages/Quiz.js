import React, { useState } from 'react';
import { questions } from './questions.js';
import './Quiz.css'

export default function App() {
	//types split left and right
	const EITYPE = 'EI', PMTYPE = 'PM', TRTYPE = 'TR', JSTYPE = 'JS';
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const initialScore = [
		{
			type: EITYPE,
			score: 0,
		},
		{
			type: PMTYPE,
			score: 0,
		},
		{
			type: TRTYPE,
			score: 0,
		},
		{
			type: JSTYPE,
			score: 0,
		}
	]
	const [score, setScore] = useState(initialScore);

	const answers = ["No", "Not really", "Don't know", "A little", "Yes"];

	const getType = () => {
		return score.map(result => {
			let resType = '';
			//default to right type for 0 score
			if (result.score < 0) resType = result.type.charAt(0);
			else resType = result.type.charAt(1);
			return resType;
		});
	};

	const updateScore = (type, amount) => {
		setScore(score.map(sc => {
			if (sc.type === type){
				return {...sc, score: sc.score + amount};
			} return sc;
		}));
	};

	const handleAnswerButtonClick = (type, amount) => {
		updateScore(type, amount);
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const calculateAmount = (index, scoreDir) => {
		let amount = index - Math.floor(answers.length/2);
		return scoreDir ? amount : amount * -1;
	};

	return (
		<>
		{/*flexbox align-items wasn't working for vertical centering*/}
		<br/><br/><br/><br/><br/><br/><br/><br/>
    <div className='quiz-container'>
      <div className='quiz-app'>
        {showScore ? (
          <div className='score-section'>{getType()}</div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {answers.map((text, index) => (
                <button onClick={() => handleAnswerButtonClick(questions[currentQuestion].questionType, calculateAmount(index, questions[currentQuestion].questionScore))}>
                  {text}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
		</>
	);
}