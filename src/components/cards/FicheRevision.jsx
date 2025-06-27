function FicheRevision({ titre, niveau, duree, difficulte }) {
  return (
    <div className="card-base fiche-revision-card">
      <h3 className="matiere-title">{titre}</h3>
      <div className="fiche-info">
        <div className="info-item">
          <span className="label">Niveau:</span>
          <span>{niveau}</span>
        </div>
        <div className="info-item">
          <span className="label">Durée:</span>
          <span>{duree}</span>
        </div>
        <div className="info-item">
          <span className="label">Difficulté:</span>
          <span className={`difficulte ${difficulte.toLowerCase()}`}>
            {difficulte}
          </span>
        </div>
      </div>
      <button className="btn-primary">Commencer la révision</button>
    </div>
  );
}

export default FicheRevision;
