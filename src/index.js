import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/App.css";
import "./styles/Button.css";
import "./styles/Card.css";
import "./styles/FichesMetiers.css";
import "./styles/Home.css";
import "./styles/Navbar.css";
import "./styles/Quiz.css";
import "./styles/RevisionBac.css";
import "./styles/index.css";
import './styles/Orientation.css';
import './styles/Temoignages.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
