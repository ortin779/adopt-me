import ReactDOM from "react-dom";
import { StrictMode, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { SearchParams } from "./components/SearchParms.jsx";
import Details from "./components/Details.jsx";
import "./style.css";
import { ThemeContext } from "./contexts/ThemeContext.jsx";

const App = () => {
  const theme = useState("teal");

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
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
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
