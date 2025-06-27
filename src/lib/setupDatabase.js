import { supabase } from "./supabaseClient";

const sampleTemoignages = [
  {
    name: "Marie Dubois",
    formation: "Bac S - Promotion 2023",
    parcours: "École d'ingénieur",
    content:
      "Grâce aux ressources de révision et aux quiz, j'ai pu mieux préparer mon bac et intégrer l'école de mes rêves.",
    photo: "/images/testimonial-1.jpg",
  },
  {
    name: "Thomas Martin",
    formation: "Bac ES - Promotion 2023",
    parcours: "École de commerce",
    content:
      "Les fiches métiers m'ont vraiment aidé à y voir plus clair dans mon orientation. Je recommande vivement !",
    photo: "/images/testimonial-2.jpg",
  },
  {
    name: "Sophie Laurent",
    formation: "Bac L - Promotion 2022",
    parcours: "Faculté de droit",
    content:
      "J'ai découvert ma vocation grâce aux tests d'orientation. Aujourd'hui, je suis épanouie dans mes études de droit.",
    photo: "/images/testimonial-3.jpg",
  },
];

async function setupDatabase() {
  try {
    // Insert sample data
    const { data, error } = await supabase
      .from("temoignages")
      .insert(sampleTemoignages)
      .select();

    if (error) {
      throw error;
    }

    console.log("Data inserted successfully:", data);
    return true;
  } catch (error) {
    console.error("Database setup failed:", error.message);
    return false;
  }
}

export default setupDatabase;
