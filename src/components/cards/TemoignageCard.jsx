function TemoignageCard({ photo, nom, contenu, tags }) {
  return (
    <div className="temoignage-card">
      <div className="temoignage-header">
        <img src={photo} alt={nom} className="photo" />
        <h3 className="nom">{nom}</h3>
      </div>
      
      <div className="temoignage-content">
        <p>{contenu}</p>
      </div>
      
      <div className="temoignage-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default TemoignageCard;