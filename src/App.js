import React from "react";
import "./App.scss";
import Home from './pages/home'
import CSS_PAGE from './pages/css-challenge'
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/css-challenge" component={CSS_PAGE}></Route>
    </Switch>
  )
}

export default App;
