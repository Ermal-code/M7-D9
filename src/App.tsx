import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Detail from "./components/Detail";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route
          path="/details/:id"
          exact
          render={(props) => <Detail {...props} />}
        />
      </div>
    </Router>
  );
}

export default App;
