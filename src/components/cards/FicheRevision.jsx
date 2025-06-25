function FicheRevision({ matiere, resume, pdfLink }) {
  return (
    <div className="card-base fiche-revision-card">
      <h3 className="matiere-title">{matiere}</h3>
      <p className="card-content">{resume}</p>
      <div className="card-footer">
        <a 
          href={pdfLink} 
          className="flex items-center text-primary hover:underline" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12l-4-4h8l-4 4z" />
          </svg>
          Télécharger le PDF
        </a>
      </div>
    </div>
  );
}

export default FicheRevision;