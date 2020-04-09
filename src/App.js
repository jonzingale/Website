import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import HaskellOnJupyter from './pages/HaskellOnJupyter';
import TestTemplate from './pages/TestTemplate';

import './css/main.css'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar bg='dark' variant='dark' expand='lg'>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/template">Template</Nav.Link>
            </Nav>
          </Navbar>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/template">
              <TestTemplate />
            </Route>
            <Route path="/">
              <HaskellOnJupyter />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;