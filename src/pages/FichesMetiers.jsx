import { useState } from 'react';
import FicheMetierCard from '../components/cards/FicheMetierCard';

function FichesMetiers() {
  const [selectedDomain, setSelectedDomain] = useState('tous');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  return (
    <div className="fiches-metiers-page">
      <h1>Fiches Métiers</h1>
      
      <div className="filters-section">
        <select 
          value={selectedDomain} 
          onChange={(e) => setSelectedDomain(e.target.value)}
          className="domain-filter"
        >
          <option value="tous">Tous les domaines</option>
          <option value="informatique">Informatique</option>
          <option value="sante">Santé</option>
          <option value="commerce">Commerce</option>
          {/* Autres domaines */}
        </select>
      </div>

      <div className="metiers-grid">
        {/* Liste des FicheMetierCard */}
      </div>

      <div className="pagination">
        {/* Boutons de pagination */}
      </div>
    </div>
  );
}

export default FichesMetiers;