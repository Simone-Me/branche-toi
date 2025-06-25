import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FichesMetiers from './pages/FichesMetiers';
import RevisionBac from './pages/RevisionBac';
import Quiz from './pages/Quiz';
import Orientation from './pages/Orientation';
import Temoignages from './pages/Temoignages';

function App() {
  return (
    <Layout>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiches-metiers" element={<FichesMetiers />} />
          <Route path="/revision-bac" element={<RevisionBac />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/orientation" element={<Orientation />} />
          <Route path="/temoignages" element={<Temoignages />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
