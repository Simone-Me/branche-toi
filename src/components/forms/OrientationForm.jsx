import { useState } from 'react';

function OrientationForm({ onSubmit }) {
  return (
    <form className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6" onSubmit={onSubmit}>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Vos centres d'intérêt</h3>
          <div className="space-y-4">
            <div>
              <label className="form-label">Domaines préférés</label>
              <select className="form-select" multiple>
                <option>Sciences</option>
                <option>Littérature</option>
                <option>Arts</option>
                <option>Technologies</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Vos compétences</h3>
          <div className="space-y-4">
            <div>
              <label className="form-label">Auto-évaluation</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Organisation', 'Communication', 'Analyse', 'Créativité'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="1"
                      max="5"
                      className="w-full"
                    />
                    <span className="text-sm text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          Voir les résultats
        </button>
      </div>
    </form>
  );
}

export default OrientationForm;