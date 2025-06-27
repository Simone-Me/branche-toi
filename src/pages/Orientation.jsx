import OrientationCard from "../components/cards/OrientationCard";

function Orientation() {
  const orientationPaths = [
    {
      id: 1,
      title: "Sciences et Technologies",
      description: "Découvrez les métiers de l'innovation et de la recherche",
      domains: ["Ingénierie", "Informatique", "Recherche"],
      duration: "20 min",
      type: "Questionnaire détaillé",
    },
    {
      id: 2,
      title: "Commerce et Management",
      description: "Explorez les carrières dans le monde des affaires",
      domains: ["Marketing", "Finance", "Gestion"],
      duration: "15 min",
      type: "Test d'aptitude",
    },
    {
      id: 3,
      title: "Arts et Culture",
      description: "Développez votre créativité et votre expression",
      domains: ["Design", "Communication", "Médias"],
      duration: "25 min",
      type: "Évaluation créative",
    },
    {
      id: 4,
      title: "Santé et Social",
      description: "Découvrez les métiers du soin et de l'accompagnement",
      domains: ["Médical", "Paramédical", "Social"],
      duration: "20 min",
      type: "Questionnaire métier",
    },
    {
      id: 5,
      title: "Droit et Justice",
      description: "Explorez les carrières juridiques",
      domains: ["Droit", "Administration", "Relations internationales"],
      duration: "18 min",
      type: "Test de positionnement",
    },
    {
      id: 6,
      title: "Environnement et Nature",
      description: "Contribuez à la protection de notre planète",
      domains: ["Écologie", "Agriculture", "Développement durable"],
      duration: "22 min",
      type: "Questionnaire spécialisé",
    },
  ];

  return (
    <div className="orientation-page">
      <div className="orientation-header">
        <h1>Découvrez Votre Voie</h1>
        <p>Choisissez un domaine pour commencer votre orientation</p>
      </div>

      <div className="orientation-grid">
        {orientationPaths.map((path) => (
          <OrientationCard key={path.id} {...path} />
        ))}
      </div>
    </div>
  );
}

export default Orientation;
