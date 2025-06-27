function FicheMetierCard({
  metier,
  description,
  etudes,
  salaire,
  competences,
  debouches,
}) {
  return (
    <div className="card fiche-metier-card">
      <h3 className="card-title">{metier}</h3>
      <p className="card-description">{description}</p>

      <div className="card-details">
        <div className="detail-item">
          <span className="label">Études requises:</span>
          <span>{etudes}</span>
        </div>
        <div className="detail-item">
          <span className="label">Salaire:</span>
          <span>{salaire}</span>
        </div>
      </div>

      <div className="competences-section">
        <h4>Compétences clés</h4>
        <div className="tags">
          {competences.map((comp, index) => (
            <span key={index} className="tag">
              {comp}
            </span>
          ))}
        </div>
      </div>

      <div className="debouches-section">
        <h4>Débouchés</h4>
        <div className="tags">
          {debouches.map((deb, index) => (
            <span key={index} className="tag">
              {deb}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FicheMetierCard;
