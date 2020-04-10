import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import TestTemplate from './pages/TestTemplate';
import HaskellCoders from './pages/HaskellCoders';

import './css/main.css'

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar>
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/haskell-coding-group">HaskellCoders</Nav.Link>
              </Nav>
            </Navbar>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/haskell-coding-group">
                <HaskellCoders />
              </Route>
              <Route path="/">
                <TestTemplate />
              </Route>
            </Switch>
          </div>
        </Router>
        <footer>jonzingale@gmail.com</footer>
      </div>
    );
  }
}

export default App;