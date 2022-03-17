import React, { useState } from 'react';

export default function App() {
	const EITYPE = 'EI', MPTYPE = 'MP', TRTYPE = 'TR', JSTYPE = 'JS';
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState([
		{
			type: EITYPE,
			score: 0,
		},
		{
			type: MPTYPE,
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
	]);

	const answers = ["No", "Not really", "Not sure", "A little", "Yes"];

	const questions = [
		{
			questionType: EITYPE,
			questionText: 'Im enduring',
		},
		{
			questionType: MPTYPE,
			questionText: 'Im mental',
		},
		{
			questionType: TRTYPE,
			questionText: 'Im tactical',
		},
		{
			questionType: JSTYPE,
			questionText: 'Im justice',
		},
	];

	const updateScore = (type) => {
		setScore(score.map(sc => {
			if (sc.type === type){
				return {...sc, score: sc.score + 1};
			} return sc;
		}));
	};

	const handleAnswerButtonClick = (type) => {
		updateScore(type);
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
		setCurrentQuestion(nextQuestion);
	};

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>{JSON.stringify(score)}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[0].questionText}</div>
					</div>
					<div className='answer-section'>
						{answers.map((text) => (
							<button onClick={() => handleAnswerButtonClick(questions[currentQuestion].questionType)}>
								{text}
							</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}