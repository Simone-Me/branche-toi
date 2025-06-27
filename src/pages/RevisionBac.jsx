import { useEffect, useState } from "react";
import FicheRevision from "../components/cards/FicheRevision";
import { supabase } from "../lib/supabaseClient";

function RevisionBac() {
  const [activeTab, setActiveTab] = useState("mathematiques");
  const [fiches, setFiches] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const matieres = {
    mathematiques: "Mathématiques",
    physique: "Physique-Chimie",
    francais: "Français",
    histoire: "Histoire-Géographie",
  };

  useEffect(() => {
    fetchFichesRevision();
  }, []);

  async function fetchFichesRevision() {
    try {
      const { data, error } = await supabase
        .from("fiches_revision")
        .select("*")
        .order("id", { ascending: true });

      if (error) throw error;

      // Group fiches by matiere
      const groupedFiches = data.reduce((acc, fiche) => {
        if (!acc[fiche.matiere]) {
          acc[fiche.matiere] = [];
        }
        acc[fiche.matiere].push(fiche);
        return acc;
      }, {});

      setFiches(groupedFiches);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching fiches:", error);
      setError(error.message);
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="loading-container">
        Chargement des fiches de révision...
      </div>
    );
  }

  if (error) {
    return <div className="error-container">Erreur: {error}</div>;
  }

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
        {fiches[activeTab]?.map((fiche) => (
          <FicheRevision key={fiche.id} {...fiche} />
        )) || (
          <div className="no-data-message">
            Aucune fiche disponible pour cette matière.
          </div>
        )}
      </div>
    </div>
  );
}

export default RevisionBac;
