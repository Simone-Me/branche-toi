import { useEffect, useState } from "react";
import OrientationCard from "../components/cards/OrientationCard";
import { supabase } from "../lib/supabaseClient";

function Orientation() {
  const [paths, setPaths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrientationPaths();
  }, []);

  async function fetchOrientationPaths() {
    try {
      const { data, error } = await supabase
        .from("orientation_paths")
        .select("*")
        .order("id", { ascending: true });

      if (error) throw error;
      setPaths(data);
    } catch (error) {
      console.error("Error fetching orientation paths:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="loading-container">
        Chargement des parcours d'orientation...
      </div>
    );
  }

  if (error) {
    return <div className="error-container">Erreur: {error}</div>;
  }

  return (
    <div className="orientation-page">
      <div className="orientation-header">
        <h1>Découvrez Votre Voie</h1>
        <p>Choisissez un domaine pour commencer votre orientation</p>
      </div>

      <div className="orientation-grid">
        {paths.length > 0 ? (
          paths.map((path) => <OrientationCard key={path.id} {...path} />)
        ) : (
          <div className="no-data-message">
            <p>Aucun parcours d'orientation disponible pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orientation;
