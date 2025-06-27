function QuestionCard({ title, description, questions, duration, difficulty }) {
  return (
    <div className="quiz-card">
      <h3 className="quiz-title">{title}</h3>
      <p className="quiz-description">{description}</p>

      <div className="quiz-details">
        <div className="detail-item">
          <span className="detail-label">Questions:</span>
          <span>{questions}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Durée:</span>
          <span>{duration}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Difficulté:</span>
          <span className={`difficulty ${difficulty.toLowerCase()}`}>
            {difficulty}
          </span>
        </div>
      </div>

      <button className="start-quiz-btn">Commencer le Quiz</button>
    </div>
  );
}

export default QuestionCard;
