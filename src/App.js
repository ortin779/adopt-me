import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StrictMode } from "react";
import { SearchParams } from "./SearchParms";
import { Details } from "./pages/Details";
import "./style.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Adopt Me!</h1>
        <Switch>
          <Route path="/" exact>
            <SearchParams />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
