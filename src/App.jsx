import ReactDOM from "react-dom";
import { StrictMode, useState } from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { SearchParams } from "./components/SearchParms.jsx";
import Details from "./components/Details.jsx";
import "./style.css";
import { ErrorBoundary } from "./ErrorBoundary";
import { ThemeContext } from "./contexts/ThemeContext.jsx";

const App = () => {
  const theme = useState("teal");

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <ErrorBoundary>
          <header>
            <Link to={"/"}>
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <div style={{ height: "calc(100% - 136px)" }}>
            <Routes>
              <Route path="/" element={<SearchParams />} index />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
