import { useEffect, useState } from "react";
import FicheMetierCard from "../components/cards/FicheMetierCard";
import { supabase } from "../lib/supabaseClient";

function FichesMetiers() {
  const [metiers, setMetiers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState("tous");

  useEffect(() => {
    fetchFichesMetiers();
  }, []);

  async function fetchFichesMetiers() {
    try {
      const { data, error } = await supabase
        .from("fiches_metiers")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        throw error;
      }

      setMetiers(data);
    } catch (error) {
      console.error("Error fetching fiches métiers:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const filteredMetiers =
    selectedDomain === "tous"
      ? metiers
      : metiers.filter((m) => m.domaine === selectedDomain);

  if (loading) {
    return (
      <div className="loading-container">Chargement des fiches métiers...</div>
    );
  }

  if (error) {
    return <div className="error-container">Erreur: {error}</div>;
  }

  return (
    <div className="fiches-metiers-page max-w-7xl mx-auto px-4 py-8">
      <div className="fiches-header mb-8">
        <h1 className="text-3xl font-bold">Fiches Métiers</h1>
        <select
          value={selectedDomain}
          onChange={(e) => setSelectedDomain(e.target.value)}
          className="domain-select w-full md:w-64 p-2 border rounded-lg"
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
