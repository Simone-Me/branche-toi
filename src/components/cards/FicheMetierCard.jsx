function FicheMetierCard({ metier, etudes, salaire }) {
  return (
    <div className="card-base fiche-metier-card">
      <h3 className="card-title">{metier}</h3>
      <div className="fiche-metier-info">
        <div>
          <h4>Études requises</h4>
          <p>{etudes}</p>
        </div>
        <div>
          <h4>Salaire moyen</h4>
          <p>{salaire}</p>
        </div>
      </div>
      <div className="card-footer">
        <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
          En savoir plus
        </button>
      </div>
    </div>
  );
}

export default FicheMetierCard;