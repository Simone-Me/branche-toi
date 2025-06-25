function FicheMetierCard({ metier, etudes, salaire }) {
  return (
    <div className="fiche-metier">
      <div className="fiche-metier-content">
        <h3>{metier}</h3>
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
        <button className="btn-primary">En savoir plus</button>
      </div>
    </div>
  );
}

export default FicheMetierCard;