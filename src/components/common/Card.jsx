function Card({ title, children, className = '' }) {
  return (
    <div className={`card ${className}`}>
      {title && (
        <div className="card-title">
          <h3>{title}</h3>
        </div>
      )}
      <div className="card-content">{children}</div>
    </div>
  );
}

export default Card;