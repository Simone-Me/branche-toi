import { useEffect, useState } from "react";
import QuestionCard from "../components/cards/QuestionCard";
import { supabase } from "../lib/supabaseClient";

function Quiz() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  async function fetchQuizzes() {
    try {
      const { data, error } = await supabase
        .from("quizzes")
        .select("*")
        .order("id", { ascending: true });

      if (error) throw error;
      setQuizzes(data);
    } catch (error) {
      console.error("Error fetching quizzes:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div className="loading-container">Chargement des quiz...</div>;
  }

  if (error) {
    return <div className="error-container">Erreur: {error}</div>;
  }

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <h1>Quiz par Matière</h1>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          <option value="all">Toutes les catégories</option>
          <option value="culture">Culture Générale</option>
          <option value="maths">Mathématiques</option>
          <option value="sciences">Sciences</option>
          <option value="histoire">Histoire</option>
          <option value="litterature">Littérature</option>
          <option value="geographie">Géographie</option>
        </select>
      </div>

      <div className="quiz-grid">
        {quizzes
          .filter(
            (quiz) =>
              selectedCategory === "all" || quiz.category === selectedCategory
          )
          .map((quiz) => (
            <QuestionCard key={quiz.id} {...quiz} />
          ))}
      </div>
    </div>
  );
}

export default Quiz;
