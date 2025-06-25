function FicheRevision({ matiere, resume, pdfLink }) {
  return (
    <div className="fiche-revision-card">
      <h3 className="matiere-title">{matiere}</h3>
      <p className="resume">{resume}</p>
      <a href={pdfLink} className="pdf-link" target="_blank" rel="noopener noreferrer">
        Télécharger le PDF
      </a>
    </div>
  );
}

export default FicheRevision;