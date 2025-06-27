import { useState } from "react";
import FicheMetierCard from "../components/cards/FicheMetierCard";

function FichesMetiers() {
  const [selectedDomain, setSelectedDomain] = useState("tous");

  const metiers = [
    {
      id: 1,
      metier: "Développeur Web",
      domaine: "informatique",
      etudes: "Bac+3 à Bac+5",
      salaire: "35k€ - 55k€/an",
      description: "Création et maintenance de sites web et applications",
    },
    {
      id: 2,
      metier: "Infirmier",
      domaine: "sante",
      etudes: "Bac+3",
      salaire: "24k€ - 45k€/an",
      description: "Soins aux patients et assistance médicale",
    },
    {
      id: 3,
      metier: "Commercial",
      domaine: "commerce",
      etudes: "Bac+2 à Bac+5",
      salaire: "30k€ - 60k€/an",
      description: "Développement des ventes et relation client",
    },
    {
      id: 4,
      metier: "Architecte",
      domaine: "construction",
      etudes: "Bac+5",
      salaire: "35k€ - 80k€/an",
      description: "Conception de bâtiments et suivi de projets",
    },
    {
      id: 5,
      metier: "Data Scientist",
      domaine: "informatique",
      etudes: "Bac+5",
      salaire: "40k€ - 70k€/an",
      description: "Analyse de données et intelligence artificielle",
    },
  ];

  const filteredMetiers =
    selectedDomain === "tous"
      ? metiers
      : metiers.filter((m) => m.domaine === selectedDomain);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Fiches Métiers</h1>

      <div className="mb-8">
        <select
          value={selectedDomain}
          onChange={(e) => setSelectedDomain(e.target.value)}
          className="w-full md:w-64 p-2 border rounded-lg"
        >
          <option value="tous">Tous les domaines</option>
          <option value="informatique">Informatique</option>
          <option value="sante">Santé</option>
          <option value="commerce">Commerce</option>
          <option value="construction">Construction</option>
        </select>
      </div>

      <div className="metiers-grid">
        {filteredMetiers.map((metier) => (
          <FicheMetierCard key={metier.id} {...metier} />
        ))}
      </div>
    </div>
  );
}

export default FichesMetiers;
