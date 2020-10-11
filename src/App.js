import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InsightsContainer from "./components/InsightsContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="root">
      <div className="narrow">
        <Router>
          <Header />
          <NavBar />
          <Switch>
            <Route exact path="/">
              <h1>רקע</h1>
            </Route>
            <Route path="/answers">
              <h1>תשובות</h1>
            </Route>
            <Route exact path="/insights">
              <InsightsContainer />
            </Route>
            <Route path="/decisions">
              <h1>החלטות</h1>
            </Route>
            <Route path="/insights/:id">
              <h1>single insight</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
