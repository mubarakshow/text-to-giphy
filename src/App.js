import React from "react";
import "./App.scss";
import Home from "./pages/home";
import CSS_PAGE from "./pages/css-challenge";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="nav">
        <Link to="/">Txt2Giphy</Link>
        <Link to="/css-challenge">CSS Challenge</Link>
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
