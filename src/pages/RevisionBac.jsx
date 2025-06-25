import { useState } from 'react';
import FicheRevision from '../components/cards/FicheRevision';

function RevisionBac() {
  const [activeTab, setActiveTab] = useState('mathematiques');

  const matieres = {
    mathematiques: 'Mathématiques',
    physique: 'Physique-Chimie',
    francais: 'Français',
    histoire: 'Histoire-Géographie'
  };

  return (
    <div className="revision-bac-page">
      <h1>Fiches de Révision Bac</h1>
      
      <div className="matieres-tabs">
        {Object.entries(matieres).map(([key, value]) => (
          <button
            key={key}
            className={`tab-button ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {value}
          </button>
        ))}
      </div>

      <div className="fiches-container">
        {/* Contenu dynamique selon la matière sélectionnée */}
      </div>
    </div>
  );
}

export default RevisionBac;