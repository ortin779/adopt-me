import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { SearchParams } from "./SearchParms";
import "./style.css";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);