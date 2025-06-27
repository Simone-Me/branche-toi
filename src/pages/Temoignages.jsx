import { useEffect, useState } from "react";
import TemoignageCard from "../components/cards/TemoignageCard";
import { supabase } from "../lib/supabaseClient";

function Temoignages() {
  const [temoignages, setTemoignages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTemoignages();
  }, []);

  async function fetchTemoignages() {
    try {
      const { data, error } = await supabase
        .from("temoignages")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        throw error;
      }

      setTemoignages(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div
        className="loading-container"
        style={{ textAlign: "center", padding: "2rem" }}
      >
        <p>Chargement des témoignages...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="error-container"
        style={{ textAlign: "center", padding: "2rem", color: "red" }}
      >
        <p>Erreur: {error}</p>
        <button
          onClick={fetchTemoignages}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "4px",
            marginTop: "1rem",
          }}
        >
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <div className="temoignages-page">
      <div className="temoignages-header">
        <h1>Témoignages d'anciens élèves</h1>
        <p>Découvrez les parcours de nos étudiants</p>
      </div>

      <div className="temoignages-grid">
        {temoignages.length > 0 ? (
          temoignages.map((temoignage) => (
            <TemoignageCard key={temoignage.id} {...temoignage} />
          ))
        ) : (
          <div className="no-data-message">
            <p>Aucun témoignage disponible pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Temoignages;
