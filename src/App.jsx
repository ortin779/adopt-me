import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { SearchParams } from "./components/SearchParms.jsx";
import Details  from "./components/Details.jsx";
import "./style.css";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to={"/"}>
          <h1>Adoptt Me!</h1>
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
