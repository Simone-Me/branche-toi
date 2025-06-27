function TemoignageCard({ name, formation, parcours, content, photo }) {
  return (
    <div className="temoignage-card">
      <div className="card-header">
        <div className="photo-wrapper">
          <img src={photo} alt={name} className="student-photo" />
        </div>
        <div className="student-info">
          <h3>{name}</h3>
          <p className="formation">{formation}</p>
        </div>
      </div>

      <div className="card-content">
        <p className="testimony-text">{content}</p>
      </div>

      <div className="card-footer">
        <span className="parcours-tag">{parcours}</span>
      </div>
    </div>
  );
}

export default TemoignageCard;
