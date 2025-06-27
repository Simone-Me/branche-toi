import TemoignageCard from "../components/cards/TemoignageCard";

function Temoignages() {
  const temoignages = [
    {
      id: 1,
      name: "Marie Dubois",
      formation: "Bac S - Promotion 2023",
      parcours: "École d'ingénieur",
      content:
        "Grâce aux ressources de révision et aux quiz, j'ai pu mieux préparer mon bac et intégrer l'école de mes rêves.",
      photo: "/images/testimonial-1.jpg",
    },
    {
      id: 2,
      name: "Thomas Martin",
      formation: "Bac ES - Promotion 2023",
      parcours: "École de commerce",
      content:
        "Les fiches métiers m'ont vraiment aidé à y voir plus clair dans mon orientation. Je recommande vivement !",
      photo: "/images/testimonial-2.jpg",
    },
    {
      id: 3,
      name: "Sophie Laurent",
      formation: "Bac L - Promotion 2022",
      parcours: "Faculté de droit",
      content:
        "J'ai découvert ma vocation grâce aux tests d'orientation. Aujourd'hui, je suis épanouie dans mes études de droit.",
      photo: "/images/testimonial-3.jpg",
    },
    {
      id: 4,
      name: "Lucas Bernard",
      formation: "Bac STI2D - Promotion 2023",
      parcours: "BTS Informatique",
      content:
        "Les exercices pratiques m'ont permis de mieux comprendre les concepts techniques. Un grand merci !",
      photo: "/images/testimonial-4.jpg",
    },
    {
      id: 5,
      name: "Emma Petit",
      formation: "Bac STMG - Promotion 2022",
      parcours: "DUT GEA",
      content:
        "Le suivi personnalisé m'a aidée à prendre confiance en moi et à réussir mon orientation.",
      photo: "/images/testimonial-5.jpg",
    },
    {
      id: 6,
      name: "Antoine Moreau",
      formation: "Bac Pro - Promotion 2023",
      parcours: "Licence Pro Management",
      content:
        "J'ai pu poursuivre mes études grâce aux conseils et au soutien reçus. Merci pour tout !",
      photo: "/images/testimonial-6.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Témoignages d'anciens élèves</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {temoignages.map((temoignage) => (
          <TemoignageCard key={temoignage.id} {...temoignage} />
        ))}
      </div>
    </div>
  );
}

export default Temoignages;
