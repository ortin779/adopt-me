import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { StrictMode } from "react";
import { SearchParams } from "./components/SearchParms";
import { Details } from "./components/Details";
import "./style.css";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to={"/"}>
          <h1>Adopt Me!</h1>
        </Link>
      </header>
      <div>
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
