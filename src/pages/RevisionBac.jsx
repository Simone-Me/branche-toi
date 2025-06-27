import { useState } from "react";
import FicheRevision from "../components/cards/FicheRevision";

function RevisionBac() {
  const [activeTab, setActiveTab] = useState("mathematiques");

  const matieres = {
    mathematiques: "Mathématiques",
    physique: "Physique-Chimie",
    francais: "Français",
    histoire: "Histoire-Géographie",
  };

  const fiches = {
    mathematiques: [
      {
        id: 1,
        titre: "Dérivées et Primitives",
        niveau: "Terminale",
        duree: "45 min",
        difficulte: "Moyen",
      },
      {
        id: 2,
        titre: "Suites Numériques",
        niveau: "Terminale",
        duree: "30 min",
        difficulte: "Facile",
      },
      {
        id: 3,
        titre: "Probabilités",
        niveau: "Terminale",
        duree: "60 min",
        difficulte: "Difficile",
      },
      {
        id: 4,
        titre: "Géométrie dans l'Espace",
        niveau: "Terminale",
        duree: "45 min",
        difficulte: "Moyen",
      },
      {
        id: 5,
        titre: "Logarithmes",
        niveau: "Terminale",
        duree: "40 min",
        difficulte: "Difficile",
      },
      {
        id: 6,
        titre: "Nombres Complexes",
        niveau: "Terminale",
        duree: "50 min",
        difficulte: "Moyen",
      },
    ],
    physique: [
      {
        id: 7,
        titre: "Mécanique Quantique",
        niveau: "Terminale",
        duree: "45 min",
        difficulte: "Difficile",
      },
      {
        id: 8,
        titre: "Ondes Mécaniques",
        niveau: "Terminale",
        duree: "30 min",
        difficulte: "Moyen",
      },
      {
        id: 9,
        titre: "Réactions Chimiques",
        niveau: "Terminale",
        duree: "40 min",
        difficulte: "Facile",
      },
    ],
    francais: [
      {
        id: 10,
        titre: "Le Roman au XIXe",
        niveau: "Première",
        duree: "45 min",
        difficulte: "Moyen",
      },
      {
        id: 11,
        titre: "La Poésie Moderne",
        niveau: "Première",
        duree: "35 min",
        difficulte: "Facile",
      },
      {
        id: 12,
        titre: "Le Théâtre Classique",
        niveau: "Première",
        duree: "50 min",
        difficulte: "Moyen",
      },
    ],
    histoire: [
      {
        id: 13,
        titre: "La Guerre Froide",
        niveau: "Terminale",
        duree: "45 min",
        difficulte: "Moyen",
      },
      {
        id: 14,
        titre: "La Décolonisation",
        niveau: "Terminale",
        duree: "40 min",
        difficulte: "Facile",
      },
      {
        id: 15,
        titre: "La Ve République",
        niveau: "Terminale",
        duree: "55 min",
        difficulte: "Moyen",
      },
    ],
  };

  return (
    <div className="revision-bac-page">
      <div className="revision-header">
        <h1>Fiches de Révision Bac</h1>

        <div className="matieres-tabs">
          {Object.entries(matieres).map(([key, value]) => (
            <button
              key={key}
              className={`tab-button ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      <div className="fiches-grid">
        {fiches[activeTab].map((fiche) => (
          <FicheRevision key={fiche.id} {...fiche} />
        ))}
      </div>
    </div>
  );
}

export default RevisionBac;
