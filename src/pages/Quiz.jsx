import { useState } from 'react';
import QuestionCard from '../components/cards/QuestionCard';

function Quiz() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="mb-8">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-primary rounded-full transition-all duration-300"
              style={{ width: '40%' }}
            />
          </div>
          <div className="mt-2 text-sm text-gray-600 text-right">Question 4/10</div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-medium text-gray-900">Question actuelle</h2>
          <div className="space-y-3">
            {['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'].map((reponse, index) => (
              <button
                key={index}
                className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-colors"
              >
                {reponse}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;