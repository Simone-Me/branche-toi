function FicheMetierCard({ metier, etudes, salaire, description }) {
  return (
    <div className="card fiche-metier-card">
      <h3 className="card-title text-xl font-semibold mb-4">{metier}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="fiche-metier-info grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-sm text-gray-500 mb-1">Études requises</h4>
          <p className="font-medium">{etudes}</p>
        </div>
        <div>
          <h4 className="text-sm text-gray-500 mb-1">Salaire moyen</h4>
          <p className="font-medium">{salaire}</p>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary">En savoir plus</button>
      </div>
    </div>
  );
}

export default FicheMetierCard;
