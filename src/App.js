import React from "react";
import "./App.scss";
import Home from "./pages/home";
import CSS_PAGE from "./pages/css-challenge";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

function App() {
  let match = useRouteMatch();
  
  return (
    <div className="App">
      <header className="nav">
        <Link to={`${match.url}/`}>Txt2Giphy</Link>
        <Link to={`${match.url}/css-challenge`}>CSS Challenge</Link>
      </header>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/css-challenge" component={CSS_PAGE}></Route>
      </Switch>
      <footer>
          <h3>
            Made with ❤ by{" "}
            <a
              href="https://github.com/mubarakshow/text-to-giphy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mubarak Showole
            </a>
          </h3>
        </footer>
    </div>
  );
}

export default App;
