import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import "./materialize.css";
import "./utils/API";
import API from "./utils/API";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Container>
            <Header />
            <Switch>
              <Route exact path={["/search", "/"]} component={Search} />
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
