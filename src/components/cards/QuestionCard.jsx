function QuestionCard({ question, options, onAnswer, isAnswered, correctAnswer }) {
  return (
    <div className="question-card">
      <h3 className="question-text">{question}</h3>
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${isAnswered ? (option === correctAnswer ? 'correct' : 'incorrect') : ''}`}
            onClick={() => onAnswer(option)}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;