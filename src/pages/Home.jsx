import { Link } from "react-router-dom";

function Home() {
  const features = [
    {
      title: "Fiches Métiers",
      description: "Explorez les différentes carrières et leurs perspectives",
      path: "/fiches-metiers",
      icon: "🎯",
    },
    {
      title: "Révision Bac",
      description: "Des résumés clairs pour chaque matière",
      path: "/revision-bac",
      icon: "📚",
    },
    {
      title: "Quiz",
      description: "Testez vos connaissances de façon interactive",
      path: "/quiz",
      icon: "✍️",
    },
    {
      title: "Orientation",
      description: "Découvrez les parcours qui vous correspondent",
      path: "/orientation",
      icon: "🧭",
    },
    {
      title: "Témoignages",
      description: "Découvrez les expériences de nos utilisateurs",
      path: "/temoignages",
      icon: "💬",
    },
  ];

  return (
    <div className="home-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <Link
            to={feature.path}
            key={index}
            className="feature-card p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <div className="feature-icon text-4xl mb-2">{feature.icon}</div>
            <h2 className="text-xl font-semibold mb-1">{feature.title}</h2>
            <p className="text-gray-700">{feature.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
