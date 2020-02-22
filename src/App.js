import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./components/foodProducts";
import NavBar from "./components/navbar";
import Cart from "./components/cart";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="jumbotron text-center">
            <h1>My First Bootstrap Page</h1>
          </div>
          <Switch>
            <Route exact path="/" component={Cart} />
            <Route path="/products" component={Products} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
