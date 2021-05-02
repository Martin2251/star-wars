import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Card from "./components/card";
import Catalog from "./components/catalog";

//react router https://reactrouter.com/web/guides/quick-start
//react route video https://www.youtube.com/watch?v=Law7wfdg_ls
//www.youtube.com/watch?v=aZGzwEjZrXc

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/card/:id">
              <Card />
            </Route>
            <Route exact path="/">
              <Catalog />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
