import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./materialize.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Container>
            <Header />
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/saved" component={Saved} />
              <Route component={NoMatch} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
