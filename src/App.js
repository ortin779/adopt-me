import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import { StrictMode } from "react";
import { SearchParams } from "./SearchParms";
import { Details } from "./pages/Details";
import "./style.css";

const App = () => {
  return (
    <HashRouter>
      <div>
        <h1>Adopt Me!</h1>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
