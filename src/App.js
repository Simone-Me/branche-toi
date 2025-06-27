import { Route, Routes } from "react-router-dom";
import ConnectionTest from "./components/ConnectionTest";
import DatabaseSetup from "./components/DatabaseSetup";
import Layout from "./components/Layout";
import FichesMetiers from "./pages/FichesMetiers";
import Home from "./pages/Home";
import Orientation from "./pages/Orientation";
import Quiz from "./pages/Quiz";
import RevisionBac from "./pages/RevisionBac";
import Temoignages from "./pages/Temoignages";

function App() {
  return (
    <Layout>
      <div className="App">
        {/*<ConnectionTest /> */}
        <DatabaseSetup /> {/* cela est juste pour jaouter */}
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
