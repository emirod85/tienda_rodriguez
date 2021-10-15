import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route path="/categoria/:category" component={ItemListContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
