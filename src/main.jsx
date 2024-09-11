import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <App />
      <Footer />
    </Router>
  </React.StrictMode>
);


