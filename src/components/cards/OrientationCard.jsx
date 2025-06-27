function OrientationCard({ title, description, domains, duration, type }) {
  return (
    <div className="orientation-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>

      <div className="domains-list">
        {domains.map((domain, index) => (
          <span key={index} className="domain-tag">
            {domain}
          </span>
        ))}
      </div>

      <div className="card-details">
        <div className="detail-item">
          <span className="detail-label">Durée:</span>
          <span>{duration}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Type:</span>
          <span>{type}</span>
        </div>
      </div>

      <button className="start-btn">Commencer l'orientation</button>
    </div>
  );
}

export default OrientationCard;
