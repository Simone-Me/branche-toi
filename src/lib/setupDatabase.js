import { supabase } from "./supabaseClient";

const sampleFichesRevision = [
  {
    titre: "Dérivées et Primitives",
    matiere: "mathematiques",
    niveau: "Terminale",
    duree: "45 min",
    difficulte: "Moyen",
    contenu: "Les concepts de dérivées et primitives en mathématiques...",
  },
  {
    titre: "Suites Numériques",
    matiere: "mathematiques",
    niveau: "Terminale",
    duree: "30 min",
    difficulte: "Facile",
    contenu: "Introduction aux suites numériques...",
  },
  {
    titre: "Probabilités",
    matiere: "mathematiques",
    niveau: "Terminale",
    duree: "60 min",
    difficulte: "Difficile",
    contenu: "Étude des probabilités et statistiques...",
  },
  {
    titre: "Mécanique Quantique",
    matiere: "physique",
    niveau: "Terminale",
    duree: "45 min",
    difficulte: "Difficile",
    contenu: "Introduction aux concepts de mécanique quantique...",
  },
  {
    titre: "Le Roman au XIXe",
    matiere: "francais",
    niveau: "Première",
    duree: "45 min",
    difficulte: "Moyen",
    contenu: "Analyse des grands romans du XIXe siècle...",
  },
  {
    titre: "La Guerre Froide",
    matiere: "histoire",
    niveau: "Terminale",
    duree: "45 min",
    difficulte: "Moyen",
    contenu: "Étude de la période de la Guerre Froide...",
  },
];

const sampleFichesMetiers = [
  {
    metier: "Développeur Web",
    description: "Création et maintenance de sites web et applications",
    etudes: "Bac+3 à Bac+5",
    salaire: "35k€ - 55k€/an",
    domaine: "informatique",
    competences: ["JavaScript", "HTML/CSS", "React", "Node.js"],
    debouches: ["Startup", "ESN", "Grande entreprise"],
  },
  {
    metier: "Data Scientist",
    description: "Analyse de données et création de modèles prédictifs",
    etudes: "Bac+5",
    salaire: "40k€ - 70k€/an",
    domaine: "informatique",
    competences: ["Python", "Machine Learning", "SQL", "Statistiques"],
    debouches: ["Consulting", "R&D", "Laboratoire de recherche"],
  },
  {
    metier: "Architecte",
    description: "Conception et suivi de projets de construction",
    etudes: "Bac+5",
    salaire: "35k€ - 80k€/an",
    domaine: "construction",
    competences: ["AutoCAD", "Gestion de projet", "Design", "Réglementation"],
    debouches: ["Cabinet d'architecture", "Bureau d'études", "Freelance"],
  },
  {
    metier: "Infirmier",
    description: "Soins aux patients et assistance médicale",
    etudes: "Bac+3",
    salaire: "24k€ - 45k€/an",
    domaine: "sante",
    competences: ["Soins infirmiers", "Communication", "Gestion du stress"],
    debouches: ["Hôpital", "Clinique", "Cabinet médical"],
  },
  {
    metier: "Commercial",
    description: "Développement des ventes et relation client",
    etudes: "Bac+2 à Bac+5",
    salaire: "30k€ - 60k€/an",
    domaine: "commerce",
    competences: ["Négociation", "Relation client", "Stratégie commerciale"],
    debouches: ["Entreprise de services", "Industrie", "Grande distribution"],
  },
];

const sampleQuizzes = [
  {
    title: "Culture Générale",
    description: "Testez vos connaissances générales",
    questions: 10,
    duration: "15 min",
    difficulty: "Facile",
    category: "culture",
  },
  {
    title: "Mathématiques",
    description: "Révision des concepts clés",
    questions: 15,
    duration: "20 min",
    difficulty: "Moyen",
    category: "maths",
  },
  {
    title: "Histoire",
    description: "Les grandes périodes historiques",
    questions: 12,
    duration: "18 min",
    difficulty: "Moyen",
    category: "histoire",
  },
  {
    title: "Sciences",
    description: "Physique, Chimie et SVT",
    questions: 20,
    duration: "25 min",
    difficulty: "Difficile",
    category: "sciences",
  },
  {
    title: "Littérature",
    description: "Les grands classiques",
    questions: 10,
    duration: "15 min",
    difficulty: "Moyen",
    category: "litterature",
  },
  {
    title: "Géographie",
    description: "Pays et capitales",
    questions: 15,
    duration: "20 min",
    difficulty: "Facile",
    category: "geographie",
  },
];

const sampleOrientationPaths = [
  {
    title: "Sciences et Technologies",
    description: "Découvrez les métiers de l'innovation et de la recherche",
    domains: ["Ingénierie", "Informatique", "Recherche"],
    duration: "20 min",
    type: "Questionnaire détaillé",
  },
  {
    title: "Commerce et Management",
    description: "Explorez les carrières dans le monde des affaires",
    domains: ["Marketing", "Finance", "Gestion"],
    duration: "15 min",
    type: "Test d'aptitude",
  },
  {
    title: "Arts et Culture",
    description: "Développez votre créativité et votre expression",
    domains: ["Design", "Communication", "Médias"],
    duration: "25 min",
    type: "Évaluation créative",
  },
  {
    title: "Santé et Social",
    description: "Découvrez les métiers du soin et de l'accompagnement",
    domains: ["Médical", "Paramédical", "Social"],
    duration: "20 min",
    type: "Questionnaire métier",
  },
  {
    title: "Droit et Justice",
    description: "Explorez les carrières juridiques",
    domains: ["Droit", "Administration", "Relations internationales"],
    duration: "18 min",
    type: "Test de positionnement",
  },
  {
    title: "Environnement et Nature",
    description: "Contribuez à la protection de notre planète",
    domains: ["Écologie", "Agriculture", "Développement durable"],
    duration: "22 min",
    type: "Questionnaire spécialisé",
  },
];

async function setupDatabase() {
  try {
    // // Insert fiches révision
    // const { data: revisionData, error: revisionError } = await supabase
    //   .from("fiches_revision")
    //   .insert(sampleFichesRevision)
    //   .select();

    // if (revisionError) throw revisionError;
    // console.log("Fiches révision inserted successfully:", revisionData);

    // // Insert fiches métiers
    // const { data: fichesData, error: fichesError } = await supabase
    //   .from("fiches_metiers")
    //   .insert(sampleFichesMetiers)
    //   .select();

    // if (fichesError) throw fichesError;
    // console.log("Fiches métiers inserted successfully:", fichesData);

    // // Insert quizzes
    // const { data: quizData, error: quizError } = await supabase
    //   .from("quizzes")
    //   .insert(sampleQuizzes)
    //   .select();

    // if (quizError) throw quizError;
    // console.log("Quizzes inserted successfully:", quizData);

    // Insert orientation paths
    const { data: orientationData, error: orientationError } = await supabase
      .from("orientation_paths")
      .insert(sampleOrientationPaths)
      .select();

    if (orientationError) throw orientationError;
    console.log("Orientation paths inserted successfully:", orientationData);

    return true;
  } catch (error) {
    console.error("Database setup failed:", error.message);
    return false;
  }
}

export default setupDatabase;
