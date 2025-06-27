import { useState } from "react";
import QuestionCard from "../components/cards/QuestionCard";

function Quiz() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const quizzes = [
    {
      id: 1,
      title: "Culture Générale",
      description: "Testez vos connaissances générales",
      questions: 10,
      duration: "15 min",
      difficulty: "Facile",
      category: "culture",
    },
    {
      id: 2,
      title: "Mathématiques",
      description: "Révision des concepts clés",
      questions: 15,
      duration: "20 min",
      difficulty: "Moyen",
      category: "maths",
    },
    {
      id: 3,
      title: "Histoire",
      description: "Les grandes périodes historiques",
      questions: 12,
      duration: "18 min",
      difficulty: "Moyen",
      category: "histoire",
    },
    {
      id: 4,
      title: "Sciences",
      description: "Physique, Chimie et SVT",
      questions: 20,
      duration: "25 min",
      difficulty: "Difficile",
      category: "sciences",
    },
    {
      id: 5,
      title: "Littérature",
      description: "Les grands classiques",
      questions: 10,
      duration: "15 min",
      difficulty: "Moyen",
      category: "litterature",
    },
    {
      id: 6,
      title: "Géographie",
      description: "Pays et capitales",
      questions: 15,
      duration: "20 min",
      difficulty: "Facile",
      category: "geographie",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
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
